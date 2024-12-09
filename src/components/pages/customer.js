function Customer(){
    return(
        <div className="page-wrapper" style={{ textAlign: "justify" }}>
        <div className="content container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-bory">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div style={{ marginTop: "20px", marginLeft: "30px" }}>
                                    <h3>List Customer</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-body" style={{ paddingTop: "10px" }}>
                            <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                            <th>Customer ID</th>
                                            <th>Customer Name</th>
                                            <th>Email</th>                                         
                                            <th>Phone Number</th>
                                            <th>Address</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>                                    
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                      
                                                    </h2>
                                                </td>                                                                                   
                                            </tr>                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Customer;