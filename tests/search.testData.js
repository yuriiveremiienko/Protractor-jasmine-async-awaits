import moment from 'moment';

export default {
	searchParams: [
		{
			destination: 'New York',
			checkInDate: moment().format('DD/MM/YYYY'),
			checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY')
		},
		{
			destination: 'Boston',
			checkInDate: moment().format('DD/MM/YYYY'),
			checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY')
		},
		{
			destination: 'Los Angeles',
			checkInDate: moment().format('DD/MM/YYYY'),
			checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY')
		},
		{
			destination: 'San José',
			checkInDate: moment().format('DD/MM/YYYY'),
			checkOutDate: moment().add(7, 'days').format('DD/MM/YYYY')
		}
	]
}
