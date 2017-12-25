import './blog.scss';
import 'normalize.css';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Products Features','More', 'Log In', 'Sign Up'], 'menu');
document.body.appendChild(menu);
