import { changeColor } from '../../redux/action';
import './SidebarButton.scss';
import { useSelector, useDispatch } from 'react-redux';


function SidebarButton({ background }) {
	const dispatch = useDispatch();

	return (
		<button className='buttons_col' style={{background: background}} onClick={() => dispatch(changeColor(background))}></button>
	)
}

export default SidebarButton