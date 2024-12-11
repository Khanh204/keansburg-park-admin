function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="/dashboard"><i className="fe fe-home"></i> <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href="/customers"><i className="fe fe-vector"></i> <span>Customer</span></a>
                        </li>
                        <li>
                            <a href="/doctor"><i className="fe fe-star-o"></i> <span>List Order</span></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
