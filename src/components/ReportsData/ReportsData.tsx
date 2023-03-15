import React from 'react';
import style from './ReportsData.module.css';

const ReportsData = (props: any) => {

	console.log(props.data)

	return (
		<div>
			{Object.entries(props.data).map(([key, value]) => {
				// Calculate the total amount for this key
				const totalAmount = value.reduce((acc, item) => acc + item.amount, 0);

				return (
					<div key={key}>
						<div>
							<span>{key}</span>
							<strong>Total Amount:</strong> {totalAmount}
						</div>

						<ul>
							{value.map((item, index) => (
								<li key={index}>
									<div>
										<p>Payment ID: {item.paymentId}</p>
										<p>Amount: {item.amount}</p>
										<p>Gateway ID: {item.gatewayId}</p>
										<p>Modified: {item.modified}</p>
										{/* <p>Created: {item.created}</p> */}
									</div>
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</div>

	)
}

export default ReportsData