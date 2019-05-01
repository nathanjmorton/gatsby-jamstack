import React from 'react';
import Layout from '../components/layout';


const ContactPage = () => {
    return (
			<Layout>
				<h1>Contact</h1>
				<form>
					<label>Name</label>
					<input type="text" name="name"></input>
					<br />
					<label>Email</label>
					<input type="email" name="email"></input>
					<br />
					<label>Phone</label>
					<input type="tel" name="phone"></input>
				</form>
			</Layout>
    );
};

export default ContactPage;
