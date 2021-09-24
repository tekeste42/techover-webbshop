import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import useStyles from './styles';
import { connect } from 'react-redux';

const Checkout = ({}) => {
	const classes = useStyles();

	return (
		<div id="Product__screen">
			<Container maxWidth="md">
				<div className={classes.productHeader}>
					<Typography variant="h1" className={classes.productsTitle}>
						Checkout
					</Typography>
				</div>
			</Container>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {};
};

const mapDIspatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDIspatchToProps)(Checkout);
