import 'bootstrap';
import "tailwindcss/tailwind.css"
import './scss/main.scss'
import { examples } from './markup'

const el = document.createElement('div');
el.innerHTML = examples
document.body.appendChild(el);
