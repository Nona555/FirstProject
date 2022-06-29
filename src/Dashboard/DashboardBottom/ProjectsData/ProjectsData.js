import member1 from '../../DashBoardImages/member1.jpg'
import member2 from '../../DashBoardImages/member2.jpg'
import member3 from '../../DashBoardImages/member3.jpg'
import member4 from '../../DashBoardImages/member4.jpg'
import logo from '../../DashBoardImages/logo.svg'
import logoAtlassian from '../../DashBoardImages/logo-atlassian.svg'
import logoSlack from '../../DashBoardImages/logo-slack.svg'
import logoSpotify from '../../DashBoardImages/logo-spotify.svg'
import logoJira from '../../DashBoardImages/logo-jira.svg'
import logoInvision from '../../DashBoardImages/logo-invision.svg'
export const ProjectsData = [
    {
        iconSrc: logo,
        name: 'Soft UI XD Version',
        members: [member1,member2,member3,member4],
        price: '$14,000',
        progressItem2: 'progress1'
    },
    {
        iconSrc: logoAtlassian,
        name: 'Add Progress Track',
        members: [member2,member4],
        price: '$3,000',
        progressItem2: 'progress2'
    },
    {
        iconSrc: logoSlack,
        name: 'Fix Platform Errors',
        members: [member1,member3],
        price: 'Not set',
        progressItem2: 'full'
    },
    {
        iconSrc: logoSpotify,
        name: 'Launch our Mobile App',
        members: [member4,member3,member2,member1],
        price: '$20,500',
        progressItem2: 'full'
    },
    {
        iconSrc: logoJira,
        name: 'Add the New Pricing Page',
        members: [member4],
        price: '$500',
        progressItem2: 'progress5'
    },
    {
        iconSrc: logoInvision,
        name: 'Redesign New Online Shop',
        members: [member1,member4],
        price: '$2,000',
        progressItem2: 'progress6'
    }

]
