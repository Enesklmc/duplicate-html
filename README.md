# Duplicate HTML
Duplicate Html components with one line of Html comment instead of ~~Copy Paste~~.

Benefits:
* Avoid long lines of code
* Edit cloned elements at the same time

## Use of
First, include the duplicate-html.js file.
```<script src="duplicate-html.js"></script>```

Then, put Html comment ``` <!-- duplicate.X --> ``` ( X is the amount of Copies ) above the item you want to Duplicate.

```html
<div class="container my-5">
	<div class="row">
		<!-- duplicate.21 -->
		<div class="col-12 col-md-6 col-xl-4 p-3">
			<div class="media song-media p-3 border rounded justify-content-center align-items-center">
				<div class="media-body pr-2">
					<!-- duplicate.2 -->
					<span>Hello my friend, Welcome</span>
				</div>
				<img src="fire.jpg">
			</div>
		</div>
	</div>
</div>
```

![Screenshot](http://klmcthemes.com/duplicate-html-preview.jpg)
