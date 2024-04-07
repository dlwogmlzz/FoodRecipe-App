import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function QuoteSection() {
	return (
		<p className="section quote">
			<p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} /> Food is the most important factor for me to relieve my stress. Words cannot describe the happiness of delicious food and a simple drink.</p>
			<p className="quote-author">- Lee Jae Hee</p>
		</p>
	)
}