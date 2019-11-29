# duplicate-html
Duplicate Html components with one line of Html comment instead of Copy Paste.

Why?
* Avoid long Code lines
* Quick edit functionility

Just put <!-- duplicate.X --> ( X is the amount of Copies ) comment above the item you want to Copy.

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

![Screenshot](https://github.com/Enesklmc/duplicate-html/blob/master/duplicateHTMLscreenshot.png)
