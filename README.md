#angular-offcanvas

## Install

	npm install --save-dev platdesign/angular-offcanvas

## Usage

### Javascript

	var app = angular.module('app', ['pd']);

### Html

	<button ng-click="$broadcast('pdOffcanvas:toggle', 'mainNav')">
		Show Offcanvas
	</button>
	
	<nav pd-offcanvas="mainNav">
		<li>...</li>
	</nav>
	
	<div pd-offcanvas-cover="mainNav">
		Content
	</div>


### Css

	[pd-offcanvas-cover="mainNav"] {
		width: 300px;
		transition: transform .3s;
	}

	[pd-offcanvas-cover="mainNav"].pd-offcanvas-cover-move {
		transform: translateX( -300px );
	}

### Events

- `pdOffcanvas:toggle` Listener
- `pdOffCanvas:show` Sender
- `pdOffCanvas:hide` Sender


## Contact
- [@platdesign](https://twitter.com/platdesign)
- [platdesign.de](http://platdesign.de)
- [mail@platdesign.de](mailto:mail@platdesign.de)


##License
MIT

