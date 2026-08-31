/* eslint-disable @typescript-eslint/no-unused-vars */
// extractor function for use with an advanced JS document extractor
function extract(request, response) {
    $ = response.body;

    // extract the url of the page, preference to meta og:url, fallback tocanonical URL
    var url = $('meta[property="og:url"]').attr('content') || $('link[rel="canonical"]').attr('href');

    // regex pattern to capture first directory after the domain
    var regex = /^https?:\/\/[^\/]+\/([^?\/#]+)\//g;

    // extract page type by first matching the regex pattern, then prioritize meta og:type, fallback to page type from regex, or finally hard-coded string
    var p = regex.exec(url);
    var page_type = $('meta[property="og:type"]').attr('content') || p != null ? p[1] : 'website_content';

    // normalize page type to title case
    page_type = titleCased(page_type);

    // build the rest of the return object
    return [{
      'description': $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || $('p').text(),
      'name': $('meta[name="searchtitle"]').attr('content') || $('meta[name="title"]').attr('content') || $('meta[property="og:title"]').attr('content') || $('title').text(),
      'type': page_type,
      'url': url,
      'image_url': 'https://www.midflorida.com' + $('div.container-main div div.hero-main img').first().attr('src') || $('meta[property="og:image"]').attr('content') ||  'https://www.midflorida.com/-/media/feature/midflorida/siteasset/logo-new.svg'
    }];
  }

  // helper function to normalize page type to title case
  function titleCased(sentence){
    return sentence
    .replaceAll('-',' ')                                        // replace hyphens with spaces
    .replaceAll('_',' ')                                        // replace underscores with spaces
    .split(' ')                                                 // split the sentence into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // capitalize the first letter of each word
    .join(' ');                                                 // join the words back into a sentence
  }