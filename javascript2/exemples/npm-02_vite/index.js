import './style.css';
import { Tooltip } from 'bootstrap';

const allTooltipsCollection = document.querySelectorAll('[data-bs-toggle="tooltip"]');
allTooltipsCollection.forEach((tooltipElement) => new Tooltip(tooltipElement));
