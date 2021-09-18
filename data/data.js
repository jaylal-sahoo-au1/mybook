export const courses = [
	{
		id: 1,
		title: 'HTML',
		short_description:
			'This HTML section covers frequently asked HTML interview questions with answer.Along with, we have template section where you are able to access lists of HTML/CSS project',
		action: {
			Questions: '/htmlQuestion',
			Templates: '/htmlCssTemplate',
		},
	},
	{
		id: 2,
		title: 'CSS',
		short_description:
			'This CSS section covers frequently asked CSS interview questions with answer. Along with, we have template section where you are able to access lists of HTML/CSS project',
		action: {
			Questions: '/cssQuestion',
			Templates: '/htmlCssTemplate',
		},
	},
	{
		id: 3,
		title: 'JAVASCRIPT',
		short_description:
			'This Javascript section covers topicwise detail explanation of javascript concept.  Along with, we have project section where you are able to access lists of javascript project',
		action: {
			Learn: '/javascriptLearn',
			Projects: '/javascriptTemplate',
		},
	},
	{
		id: 4,
		title: 'REACT',
		short_description: 'No Data Available Now',
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
				Example hhhh
			</p>
		),
		example: [
			{
				title: 'Example 1',
				url: 'https://jsfiddle.net/3pctmbd6/1/',
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
