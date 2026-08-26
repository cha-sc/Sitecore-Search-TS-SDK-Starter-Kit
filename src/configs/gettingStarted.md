# dealing with errors

If you get this error

        validation_error_1: "suggestion 'title_context_aware' not configured"

You need to go to Administration -> Domain Settings -> Feature Configuration -> Suggestion Blocks.

Scroll to the bottom, click Add Suggestion Option

    Display Name: Title Context Aware
    Suggestion Name: title_context_aware
    Algorithm: Context Aware
    Analyzers: Ngram Based Matching, Shingle Generator
    Build Suggestions From: Name/Title
    Grouping Analyzer: Shingle Generator
    Match Analyzer: Ngram Based Matching

Click save. Click publish. Click to reindex content.

Then go to Widgets, click Add Widget

    Create Home Hero

        Widget Type: HTML Block
        Name: Home Hero
        Widget ID: home_hero

        Use appearance template for Vertical CTA

        Fill in fields, such as Image URL, title, content, button text, and button link URL

    Click Publish.

    Create Search Home Highlights Articles

        Widget Type: Search Results
        Name: Search Home Highlights Articles
        Widget ID: search_home_hightlight_articles

    Click Publish.

This should put the two required widgets and the required Suggestion compare for this project into your configuration.