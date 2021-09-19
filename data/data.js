export const courses = [
	{
		id: 1,
		title: 'HTML',
		short_description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
		action: {
			Questions: '/htmlQuestion',
			Templates: '/htmlCssTemplate',
		},
	},
	{
		id: 2,
		title: 'CSS',
		short_description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
		action: {
			Questions: '/cssQuestion',
			Templates: '/htmlCssTemplate',
		},
	},
	{
		id: 3,
		title: 'JAVASCRIPT',
		short_description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
		action: {
			Learn: '/javascriptLearn',
			Templates: '/javascriptTemplate',
		},
	},
	{
		id: 4,
		title: 'REACT',
		short_description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
		action: {
			Questions: '/reactQuestion',
			Templates: '/reactTemplate',
		},
	},
];

export const htmlQuestion = [
	{
		id: 1,
		Ques: 'Are the HTML tags and elements the same thing?',
		Ans: (
			<p className="m0">
				No. HTML elements are defined by a starting tag, may contain some
				content and a closing tag but HTML tag is defined by starting and ending
				tag
			</p>
		),
		example: [],
	},
	{
		id: 2,
		Ques: 'What are tags and attributes in HTML',
		Ans: (
			<p className="m0">
				Tags are the primary component of the HTML that defines how the content
				will be structured/ formatted, whereas Attributes are used along with
				the HTML tags to define the characteristics of the element.
			</p>
		),
		example: [],
	},
	{
		id: 3,
		Ques: 'What are void elements in HTML?',
		Ans: (
			<p className="m0">
				HTML elements which do not have closing tags or do not need to be closed
				are Void elements.
				<br />
				For Example &lt;br/&gt;, &lt;img/&gt; etc. tag
			</p>
		),
		example: [],
	},
	{
		id: 4,
		Ques: 'What are HTML Entities?',
		Ans: (
			<p className="m0">
				In HTML some characters are reserved like ‘&lt;’, ‘&gt;’, ‘&frasl;’,
				etc. To use these characters in our webpage we need to use the character
				entities called HTML Entities <br />
			</p>
		),
		example: [
			{
				title: 'Reference Chart',
				url: 'https://www.w3schools.com/html/html_entities.asp',
			},
		],
	},
	{
		id: 5,
		Ques: 'What are different types of lists in HTML?',
		Ans: (
			<p className="m0">
				1. unordered list
				<br />
				2. ordered list
				<br />
				3. description list
				<br />
			</p>
		),
		example: [
			{
				title: 'unordered list',
				url: 'https://jsfiddle.net/x0honp8g/',
			},
			{
				title: 'ordered list',
				url: 'https://jsfiddle.net/y280zqun/3/',
			},
			{
				title: 'description list',
				url: '',
			},
		],
	},
	{
		id: 6,
		Ques: 'Define multipart form data?',
		Ans: (
			<p className="m0">
				Multipart form data is one of the values of the enctype attribute. It is
				used to send the file data to the server-side for processing. The other
				valid values of the enctype attribute are text/plain and
				application/x-www-form-urlencoded.
			</p>
		),
		example: [],
	},
	{
		id: 7,
		Ques: 'Describe HTML layout structure.',
		Ans: (
			<div className="m0">
				<p>
					Every web page has different components to display the intended
					content and a specific UI. But still, there are few things which are
					templated and are globally accepted way to structure the web page,
					such as:
				</p>

				<ul>
					<li>
						<b> &lt;header&gt;:</b> Stores the starting information about the
						web page.
					</li>
					<li>
						<b>&lt;footer&gt;:</b> Represents the last section of the page.
					</li>
					<li>
						<b>&lt;nav&gt;:</b> The navigation menu of the HTML page.
					</li>
					<li>
						<b>&lt;article&gt;:</b> It is a set of information.
					</li>
					<li>
						<b>&lt;section&gt;:</b> It is used inside the article block to
						define the basic structure of a page.
					</li>
					<li>
						<b>&lt;aside&gt;:</b> Sidebar content of the page.
					</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 8,
		Ques: 'How to optimize website assets loading?',
		Ans: (
			<div className="m0">
				<p>
					To optimize website load time we need to optimize its asset loading
					and for that:
				</p>

				<ul>
					<li>
						<b>CDN hosting:</b> A CDN or content delivery network is
						geographically distributed servers to help reduce latency.
					</li>
					<li>
						<b>File compression:</b> This is a method that helps to reduce the
						size of an asset to reduce the data transfer
					</li>
					<li>
						<b>File concatenation:</b> This reduces the number of HTTP calls
					</li>
					<li>
						<b>Minify scripts:</b> This reduces the overall file size of js and
						CSS files
					</li>
					<li>
						<b>Parallel downloads:</b> Hosting assets in multiple subdomains can
						help to bypass the download limit of 6 assets per domain of all
						modern browsers. This can be configured but most general users never
						modify these settings
					</li>
					<li>
						<b> Lazy Loading:</b> Instead of loading all the assets at once, the
						non-critical assets can be loaded on a need basis
					</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 9,
		Ques: 'What are the various formatting tags in HTML?',
		Ans: (
			<div className="m0">
				<p>HTML has various formatting tags:</p>

				<ul>
					<li>
						<b> &lt;b&gt;</b>- makes text bold
					</li>
					<li>
						<b>&lt;i&gt;</b>- makes text italic
					</li>
					<li>
						<b>&lt;em&gt;</b> - makes text italic but with added semantics
						importance
					</li>
					<li>
						<b>&lt;big&gt;</b> - increases the font size of the text by one unit
					</li>
					<li>
						<b>&lt;small&gt;</b> - decreases the font size of the text by one
						unit
					</li>
					<li>
						<b>&lt;sub&gt;</b> - makes the text a subscript
					</li>
					<li>
						<b>&lt;sup&gt;</b> - makes the text a supscript
					</li>
					<li>
						<b>&lt;strong&gt;</b> - marks the text as important
					</li>
					<li>
						<b>&lt;mark&gt;</b> - highlights the text
					</li>

					<li>
						<b>&lt;del&gt;</b> - displays as strike out text
					</li>
					<li>
						<b>&lt;ins&gt;</b> - displays as added text
					</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 10,
		Ques: 'What are the different kinds of Doctypes available?',
		Ans: (
			<div className="m0">
				<p>The three kinds of Doctypes which are available:</p>

				<ul>
					<li>Strict Doctype </li>
					<li>Transitional Doctype</li>
					<li>Frameset Doctype</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 11,
		Ques: 'Please explain how to indicate the character set being used by a document in HTML?',
		Ans: (
			<div className="m0">
				<p>
					The character set is defined in &lt;meta&gt; tag inside &lt;head&gt;
					element.
				</p>
			</div>
		),
		example: [
			{
				title: 'Learn More',
				url: 'https://www.w3schools.com/tags/att_charset.asp#:~:text=When%20used%20by%20the%20%3Cmeta,in%20an%20external%20script%20file.',
			},
		],
	},
	{
		id: 12,
		Ques: 'What is the difference between <strong>, <b> tags and <em>, <i> tags?',
		Ans: (
			<div className="m0">
				<p>
					The effect on a normal webpage of the tags &lt;strong&gt;, &lt;b&gt;
					and &lt;em&gt;&lt;em/&gt; &lt;i&gt; is the same. &lt;b&gt; and
					&lt;i&gt; tags stands for bold and italic. These two tags only apply
					font styling and bold tag &lt;b&gt;, just adds more ink to the text,
					these tags don`t say anything about the text.
				</p>
				<p>
					Whereas,&lt;strong&gt; and &lt;em&gt; tags represent that the span of
					text is of strong importance or more importance and emphatic stress
					respectively than the rest of the text. These tags have semantic
					meaning.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 13,
		Ques: 'What is the significance of <head> and <body> tag in HTML?',
		Ans: (
			<div className="m0">
				<p>
					&lt;head&gt; tag provides the information about the document. It
					should always be enclosed in the &lt;html&gt; tag. This tag contains
					the metadata about the webpage and the tags which are enclosed by head
					tag like &lt;link&gt;, &lt;meta&gt;, &lt;style&gt;, &lt;script&gt;,
					etc. are not displayed on the web page. Also, there can be only 1
					&lt;head&gt; tag in the entire Html document and will always be before
					the &lt;body&gt; tag.
				</p>
				<p>
					&lt;body&gt; tag defines the body of the HTML document. It should
					always be enclosed in the &lt;html&gt; tag. All the contents which
					needs to be displayed on the web page like images, text, audio, video,
					contents, using elements like &lt;p&gt;, &lt;img&gt;, &lt;audio&gt;,
					&lt;heading&gt;, &lt;video&gt;, &lt;div&gt;, etc. will always be
					enclosed by the &lt;body&gt; tag. Also, there can be only 1 body
					element in an HTML document and will always be after the &lt;head&gt;
					tag
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 14,
		Ques: 'Can we display a web page inside a web page or Is nesting of webpages possible?',
		Ans: (
			<div className="m0">
				<p>
					Yes, we can display a web page inside another HTML web page. HTML
					provides a tag &lt;iframe&gt; using which we can achieve this
					functionality.
				</p>
				<p>&lt;iframe src=”url of the web page to embed” /&gt;</p>
			</div>
		),
		example: [],
	},
	{
		id: 15,
		Ques: 'How is Cell Padding different from Cell Spacing?',
		Ans: (
			<div className="m0">
				<p>
					Cell Spacing is the space or gap between two consecutive cells.
					Whereas, Cell Padding is the space or gap between the text/ content of
					the cell and the edge/ border of the cell. Please refer to the above
					figure example to find the difference.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 16,
		Ques: 'How can we club two or more rows or columns into a single row or column in an HTML table?',
		Ans: (
			<div className="m0">
				<p>
					HTML provides two table attributes “rowspan” and “colspan” to make a
					cell span to multiple rows and columns respectively
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 17,
		Ques: 'Is it possible to change an inline element into a block level element?',
		Ans: (
			<div className="m0">
				<p>
					Yes, it is possible using the “display” property with its value as
					“block”, to change the inline element into a block-level element.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 18,
		Ques: 'In how many ways can we position an HTML element? Or what are the permissible values of the position attribute?',
		Ans: (
			<div className="m0">
				<p>
					There are mainly 7 values of position attribute that can be used to
					position an HTML element:
				</p>
				<ol>
					<li>
						<b>static:</b> Default value. Here the element is positioned
						according to the normal flow of the document.
					</li>
					<li>
						<b>absolute:</b> Here the element is positioned relative to its
						parent element. The final position is determined by the values of
						left, right, top, bottom.
					</li>
					<li>
						<b>fixed:</b> This is similar to absolute except here the elements
						are positioned relative to the &lt;html&gt; element.
					</li>
					<li>
						<b>relative:</b> Here the element is positioned according to the
						normal flow of the document and positioned relative to its original/
						normal position
					</li>
					<li>
						<b>initial:</b> This resets the property to its default value
					</li>
					<li>
						<b>inherit:</b> Here the element inherits or takes the property of
						its parent.
					</li>
				</ol>
			</div>
		),
		example: [],
	},
	{
		id: 19,
		Ques: 'In how many ways you can display HTML elements?',
		Ans: (
			<div className="m0">
				<p>
					There are mainly 7 values of position attribute that can be used to
					position an HTML element:
				</p>
				<ol>
					<li>
						<b>inline:</b> Using this we can display any block-level element as
						an inline element. The height and width attribute values of the
						element will not affect.
					</li>
					<li>
						<b>block:</b> using this, we can display any inline element as a
						block-level element.
					</li>
					<li>
						<b>inline-block:</b>This property is similar to inline, except by
						using the display as inline-block, we can actually format the
						element using height and width values.
					</li>
					<li>
						<b>flex:</b>It displays the container and element as a flexible
						structure. It follows flexbox property.
					</li>
					<li>
						<b>inline-flex:</b> It displays the flex container as an inline
						element while its content follows the flexbox properties.
					</li>
					<li>
						<b>grid:</b> It displays the HTML elements as a grid container.
					</li>
					<li>
						<b>none:</b> Using this property we can hide the HTML element.
					</li>
				</ol>
			</div>
		),
		example: [],
	},
	{
		id: 20,
		Ques: 'What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element.',
		Ans: (
			<div className="m0">
				<p>
					When we use the attribute “visibility: hidden” for an HTML element
					then that element will be hidden from the webpage but still takes up
					space. Whereas, if we use the “display: none” attribute for an HTML
					element then the element will be hidden, and also it won’t take up any
					space on the webpage.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 21,
		Ques: 'What is SVG?',
		Ans: (
			<div className="m0">
				<p>
					HTML SVG is used to describe the two-dimensional vector and
					vector/raster graphics. SVG images and their behaviors are defined in
					XML text files. So as XML files, you can create and edit an SVG image
					with the text editor. It is mostly used for vector type diagrams like
					pie charts, 2-Dimensional graphs in an X, Y coordinate system.
				</p>
			</div>
		),
		example: [
			{
				title: 'Code',
				url: 'https://jsfiddle.net/yrt53j8s/',
			},
		],
	},
	{
		id: 22,
		Ques: 'Why is a URL encoded in HTML?',
		Ans: (
			<div className="m0">
				<p>
					An URL is encoded to convert non-ASCII characters into a format that
					can be used over the Internet because a URL is sent over the Internet
					by using the ASCII character-set only. If a URL contains characters
					outside the ASCII set, the URL has to be converted. The non-ASCII
					characters are replaced with a % followed by hexadecimal digits.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 23,
		Ques: 'Does a <!DOCTYPE html> tag is a HTML tag?',
		Ans: (
			<div className="m0">
				<p>
					No, the &lt;!DOCTYPE html&gt; declaration is not an HTML tag. There
					are many type of HTML e.g. HTML 4.01 Strict, HTML 4.01 Transitional,
					HTML 4.01 Frameset, XHTML 1.0 Strict, XHTML 1.0 Transitional, XHTML
					1.0 Frameset, XHTML 1.1 etc. So, &lt;!DOCTYPE html&gt; is used to
					instruct the web browser about the HTML page.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 24,
		Ques: 'Is there any need to change the web browsers to support HTML5?',
		Ans: (
			<div className="m0">
				<p>
					No. Almost all browsers (updated versions) support HTML 5. For example
					Chrome, Firefox, Opera, Safari, IE.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 25,
		Ques: 'Which type of video formats are supported by HTML5?',
		Ans: (
			<div className="m0">
				<p>HTML 5 supports three types of video format:</p>
				<ol>
					<li>Mp4</li>
					<li>WebM</li>
					<li>Ogg</li>
				</ol>
			</div>
		),
		example: [
			{
				title: 'Audio',
				url: 'https://jsfiddle.net/0ynw5m98/',
			},
			{
				title: 'Video',
				url: 'https://jsfiddle.net/y7egr5t2/2/',
			},
		],
	},
	{
		id: 26,
		Ques: 'What is the use of figure tag in HTML 5?',
		Ans: (
			<div className="m0">
				<p>
					The figure tag is used to add a photo in the document on the web page.
					It is used to handle the group of diagrams, photos, code listing with
					some embedded content.
				</p>
			</div>
		),
		example: [
			{
				title: 'Code',
				url: 'https://jsfiddle.net/ptuxsbm9/',
			},
		],
	},
	{
		id: 27,
		Ques: 'What is the use of details and summary tag?',
		Ans: (
			<div className="m0">
				<p>
					The details tag is used to specify some additional details on the web
					page. It can be viewed or hidden on demand. The summary tag is used
					with details tag. More details.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 28,
		Ques: 'What is datalist tag?',
		Ans: (
			<div className="m0">
				<p>
					The HTML 5 datalist tag provides an autocomplete feature on the form
					element. It facilitates users to choose the predefined options to the
					users to select data.
				</p>
			</div>
		),
		example: [
			{
				title: 'code',
				url: 'https://jsfiddle.net/xvyqbd8n/',
			},
		],
	},
	{
		id: 29,
		Ques: 'When are comments used in HTML?',
		Ans: (
			<div className="m0">
				<p>
					To understand the code easily, you can add code comments to your HTML
					document. These are not displayed in the browser, but they help you in
					leaving notes for yourself and other developers as to what a section
					of HTML is for. The start of the comment is denoted by &lt;!– and the
					end is marked by — &gt;. Anything in the middle will be completely
					ignored, even if it contains valid HTML.
				</p>
			</div>
		),
		example: [
			{
				title: 'example',
				url: 'https://jsfiddle.net/n1ofbt2x/',
			},
		],
	},
	{
		id: 30,
		Ques: 'Does a hyperlink only apply to text?',
		Ans: (
			<div className="m0">
				<p>
					No, hyperlinks can be used both on texts and images. The HTML anchor
					tag defines a hyperlink that links one page to another page. The
					“href” attribute is the most important attribute of the HTML anchor
					tag.
				</p>
				<p>
					<b>Syntax: </b>&lt;a href = ........... &gt; Link Text &lt;/a&gt;
				</p>
			</div>
		),
		example: [],
	},
];

export const htmlTemplateContent = [
	{
		id: 1,
		img: 'https://res.cloudinary.com/dpczsvkxd/image/upload/v1631101710/mybook/book1_emgzgf.jpg',
		heading: 'CSS Grid',
		title: 'Shrimp and Chorizo Paella',
		subheader: 'September 14, 2016',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
		},
		paragraph:
			'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
	},
	{
		id: 2,
		img: 'https://res.cloudinary.com/dpczsvkxd/image/upload/v1631101725/mybook/book2_emfydd.jpg',
		heading: 'Landing Page',
		title: 'Shrimp and Chorizo Paella',
		subheader: 'September 14, 2016',
		paragraph:
			'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
		},
	},
	{
		id: 3,
		img: 'https://res.cloudinary.com/dpczsvkxd/image/upload/v1631101737/mybook/book3_xylxlg.jpg',
		heading: 'Landing Page',
		title: 'Shrimp and Chorizo Paella',
		subheader: 'September 14, 2016',
		paragraph:
			'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
		},
	},
	{
		id: 4,
		img: 'https://res.cloudinary.com/dpczsvkxd/image/upload/v1631101749/mybook/book4_wzyaz9.jpg',
		heading: 'Landing Page',
		title: 'Shrimp and Chorizo Paella',
		subheader: 'September 14, 2016',
		paragraph:
			'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
		},
	},
];

export const javascriptContent = [
	{
		id: 1,
		heading: 'CSS Grid',
		title: 'var, let, const',
		subheader: 'September 14, 2016',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
			blog: {
				title: 'Blog',
				url: 'https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/',
			},
			code: {
				title: 'Start Coding',
				url: '',
			},
		},
		para: (
			<div>
				<p>
					1. var - redeclared and reinitialized
					<br />
					Ex - 1. var greeter = &quot;hey hi&quot;;
					<br />
					var greeter = &quot;say Hello instead&quot;;
					<br />
					2. var greeter = &quot;hey hi&quot;;
					<br />
					greeter = &quot;say Hello instead&quot;;
				</p>

				<p>
					{' '}
					2. let - Not redeclared but initialized
					<br />
					Ex - 1. let greeter = &quot;hey hi&quot;;
					<br />
					let greeter = &quot;say Hello instead&quot;; // error
					<br />
					2. let greeter = &quot;hey hi&quot;;
					<br />
					greeter = &quot;say Hello instead&quot;;
				</p>

				<p>
					3. const - Not redeclared and not re-initialized
					<br />
					Ex - 1. const greeter = &quot;hey hi&quot;;
					<br />
					const greeter = &quot;say Hello instead&quot;;
					<br />
					2. const greeter = &quot;hey hi&quot;;
					<br />
					greeter = &quot;say Hello instead&quot;;
				</p>
			</div>
		),
		style: {
			height: '50',
		},
	},
	{
		id: 2,
		title: 'Javascript Scope',
		subheader: 'September 14, 2016',
		para: (
			<div>
				<p>
					What is scope ?<br />
					Scope determines the accessibility (visibility) of variables.
				</p>

				<p>
					how many of scope?
					<br />
					JavaScript has 3 types of scope:
				</p>

				<p>
					Block scope
					<br />
					Function scope
					<br />
					Global scope
				</p>

				<p>
					Note - Variables declared inside a {} block cannot be accessed from
					outside the block:
				</p>

				<p>
					Note - Variables declared with var, let and const are quite similar
					when declared outside a block.
					<br />
				</p>
			</div>
		),
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
			blog: {
				title: 'Blog',
				url: 'https://scotch.io/tutorials/understanding-scope-in-javascript',
			},
			code: {
				title: 'Start Coding',
				url: '',
			},
		},
		style: {
			height: '50',
		},
	},
	{
		id: 3,
		heading: 'Landing Page',
		title: 'Shrimp and Chorizo Paella',
		subheader: 'September 14, 2016',
		para: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
		},
		style: {
			height: '50',
		},
	},
	{
		id: 4,
		heading: 'Landing Page',
		title: 'Shrimp and Chorizo Paella',
		subheader: 'September 14, 2016',
		para: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
		},
		style: {
			height: '50',
		},
	},
];
