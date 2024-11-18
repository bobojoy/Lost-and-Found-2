import React from 'react';
import { CheckCircle2, XCircle, MapPin, Calendar } from 'lucide-react';
import './ItemCard.css'; // Import the CSS file

const ItemCard = ({ item, onStatusChange }) => {
	const isHighlightedItem =
		item.title === 'Laptop' || item.title === 'iPhone 12 Pro';

	return (
		<div className={`item-card ${isHighlightedItem ? 'highlighted' : ''}`}>
			<img
				src={item.image}
				alt={item.title}
				className='item-card-image'
			/>
			<div className='item-card-body'>
				<div className='item-card-header'>
					<h3
						className={`item-card-title ${
							isHighlightedItem ? 'highlighted-title' : ''
						}`}
					>
						{item.title}
					</h3>
					<span className={`status-badge ${item.status}`}>
						{item.status.charAt(0).toUpperCase() + item.status.slice(1)}
					</span>
				</div>
				<p className='item-description'>{item.description}</p>
				<div className='item-card-footer'>
					<div className='item-location'>
						<MapPin className='icon' />
						<span className='text-sm'>{item.location}</span>
					</div>
					<div className='item-date'>
						<Calendar className='icon' />
						<span className='text-sm'>
							{new Date(item.date).toLocaleDateString()}
						</span>
					</div>
				</div>
				{item.status === 'pending' && (
					<div className='action-buttons'>
						<button
							onClick={() => onStatusChange(item.id, 'approved')}
							className='approve-button'
						>
							<CheckCircle2 className='icon-small' />
							Approve
						</button>
						<button
							onClick={() => onStatusChange(item.id, 'declined')}
							className='decline-button'
						>
							<XCircle className='icon-small' />
							Decline
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemCard;
