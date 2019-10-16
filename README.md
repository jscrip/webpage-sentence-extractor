# webpage-sentence-extractor
A quick and dirty, but decent method for extracting all sentences from a web page. This is a work in progress. The goal is to come up with a relatively universal tool for extracting proper english sentences from a target web page. Let me know if you have any improvement ideas, would love to hear them!

# Settings (with defaults)
- minWordCount: 4,
- minLength: 10,
- cssQuery: "body"

# Code Explanation
Once the code is executed in the console of a browser, it selects the chosen element (via css query selector), then performs a series of string char replacements (via regular expressions). Once the replace functions have completed, the string is split on every location that was tagged with the substring "[punct]". Next, a filter is applied using the minimum word count and minimum sentence length as thresholds. These thresholds can be adjusted to provide better results. The defaults work well for my purposes. The last step (of processing the sentences) removes extra whitespace from the start and end of each sentence. The final result is then logged to the console. Each element in the array is a sentence.
