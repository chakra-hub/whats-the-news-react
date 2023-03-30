import { Link } from "react-router-dom";
export function Navbar(){
    const css_style={
        nav:{
            'background-color':'skyblue',
            position:'sticky',
            'z-index': 1,
            top:0,
            
        },
        list:{
            'list-style': 'none',
            display:'flex',
            margin:'0px',
            padding: '0px'
        },
        list_item:{
            padding:'15px',
            color:'white'
        }
    }
    return(
        <>
        <nav style={css_style.nav}>
            <ul style={css_style.list}>
                <li style={css_style.list_item}><Link to='/'>My News App</Link></li>
                <li style={css_style.list_item}><Link to='/sports'>Sports</Link></li>
                <li style={css_style.list_item}><Link to='/business'>Business</Link></li>
                <li style={css_style.list_item}><Link to='/technology'>Technology</Link></li>
                <li style={css_style.list_item}><Link to='/entertainment'>Entertainment</Link></li>
                <li style={css_style.list_item}><Link to='/health'>Health</Link></li>
                <li style={css_style.list_item}><Link to='/science'>Science</Link></li>
            </ul>
        </nav>
        </>
    );
}