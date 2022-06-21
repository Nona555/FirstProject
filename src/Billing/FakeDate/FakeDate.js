import tam1 from '../../assets/TablesPhoto/team-1.jpg';
import tam2 from '../../assets/TablesPhoto/team-2.jpg';
import tam3 from '../../assets/TablesPhoto/team-3.jpg';
import spotify from '../../assets/TablesPhoto/projectsPhoto/logo-spotify.svg';
import invision from '../../assets/TablesPhoto/projectsPhoto/logo-invision.svg';
import jira from '../../assets/TablesPhoto/projectsPhoto/logo-jira.svg';
import slack from '../../assets/TablesPhoto/projectsPhoto/logo-slack.svg';
import webdev from '../../assets/TablesPhoto/projectsPhoto/logo-webdev.svg';
import xd from '../../assets/TablesPhoto/projectsPhoto/logo-xd.svg';


export const monthtData = [

	{
		month: 'March, 01, 2020',
		code: '#MS-415646',
		money: '180$'

	},
	{
		month: 'February, 10, 2021',
		code: '#RV-126749',
		money: '250$'

	},
	{
		month: 'April, 05, 2020',
		code: '#QW-103578',
		money: '120$'

	},
	{
		month: 'June, 25, 2019',
		code: '#MS-415646',
		money: '180$'

	},
	{
		month: 'March, 01, 2020',
		code: '#AR-803481',
		money: '300$'

	}
]

export const cardData = [

	{
		name: 'Oliver Liam',
		Company: 'Viking Burrito',
		Email:   'oliver@burrito.com',
	},
	{
		name: 'Lucas Harper',
		Company: 'Stone Tech Zone',
		Email:   'lucas@stone-tech.com',
		Number:   'FRB1235476'
	},
	{
		name: 'Ethan James',
		Company: 'Fiber Notion',
		Email:   'ethan@fiber.com',
		Number:   'FRB1235476'
	}
	
]

export const transactions = {
	newest: [
		{
			name: 'Netflix',
			date: '27 March 2020, at 12:30 PM',
			money: 2500,
			status: 'failed',
		},
		{
			name: 'Apple',
			date: '27 March 2020, at 04:30 AM',
			money: 2000,
			status: 'success',
		}
	],
	yesterday: [
		{
			name: 'Stripe',
			date: '26 March 2020, at 13:45 PM',
			money: 750,
			status: 'success',
		},
		{
			name: 'HubSpot',
			date: '26 March 2020, at 12:30 PM',
			money: 1000,
			status: 'success',
		},
		{
			name: 'Creative Tim',
			date: '26 March 2020, at 08:30 AM',
			money: 2500,
			status: 'success',
		},
		{
			name: 'Webflow',
			date: '26 March 2020, at 05:00 AM',
			money: null,
			status: 'pending',
		}
	]
}

export const tablesInfo = [
	{
		img: `${tam1}`,
		name: 'John Michael',
		creative: 'john@creative-tim.com',
		stat: 'Manager',
		job: 'Organization',
		status: 'ONLINE',
		data: '23/04/18',
		alt: 'John'
	},
	{
		img: `${tam3}`,
		name: 'Alexa Liras',
		creative: 'alexa@creative-tim.com',
		stat: 'Programator',
		job: 'Developer',
		status: 'OFFLINE',
		data: '11/01/19'
	},
	{
		img: `${tam2}`,
		name: 'Laurent Perrier',
		creative: 'laurent@creative-tim.com',
		stat: 'Executive',
		job: 'Projects',
		status: 'ONLINE',
		data: '19/09/17',
		alt: 'Laurent'
	},
	{
		img: `${tam3}`,
		name: 'Michael Levi',
		creative: 'michael@creative-tim.com',
		stat: 'Programator',
		job: 'Developer',
		status: 'ONLINE',
		data: '24/12/08',
		alt: 'Michael'
	},
	{
		img: `${tam1}`,
		name: 'Richard Gran',
		creative: 'richard@creative-tim.com',
		stat: 'Manager',
		job: 'Executive',
		status: 'OFFLINE',
		data: '04/10/21',
		alt: 'Richard'
	},
	{
		img: `${tam2}`,
		name: 'Miriam Eric',
		creative: 'miriam@creative-tim.com',
		stat: 'Programtor',
		job: 'Developer',
		status: 'OFFLINE',
		data: '14/09/20	',
		alt: 'Miriam'
	}
	
]

export const tablesProject = [
	{
		img: `${spotify}`,
		name: 'Spotift',
		budget: '$2,500',
		status: 'working',
		completion: '60%',
		background: 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))'
	},
	{
		img: `${invision}`,
		name: 'Invesion',
		budget: '$5,000',
		status: 'done',
		completion: '100%',
		background: 'linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))'
	},
	{
		img: `${jira}`,
		name: 'Jira',
		budget: '$3,400',
		status: 'canceled',
		completion: '30%',
		background: 'linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))'

	},
	{
		img: `${slack}`,
		name: 'Slack',
		budget: '$1,400',
		status: 'canceled',
		completion: '0%'
	},
	{
		img: `${webdev}`,
		name: 'Webdev',
		budget: '$14,000',
		status: 'working',
		completion: '80%',
		background: 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))'
	},
	{
		img: `${xd}`,
		name: 'Adobe XD',
		budget: '$2,300',
		status: 'done',
		completion: '100%',
		background: 'linear-gradient(310deg, rgb(23, 173, 55), rgb(152, 236, 45))'
	},

]

