import React from 'react';

function CreateProjectForm() {
  return (
    <>
    <div className="modal fade" id="addOrderModalside">
    <div className="modal-dialog" role="document">
    <div className="modal-content">
    <div className="modal-header">
    <h5 className="modal-title">Create Project</h5>
    <button type="button" className="close" data-dismiss="modal"><span>&times;</span>
    </button>
    </div>
    <div className="modal-body">
    <form>
    <div className="form-group">
    <label className="text-black font-w500">Project Name</label>
    <input type="text" className="form-control" />
    </div>
    <div className="form-group">
    <label className="text-black font-w500">Deadline</label>
    <input type="date" className="form-control" />
    </div>
    <div className="form-group">
    <label className="text-black font-w500">Client Name</label>
    <input type="text" className="form-control" />
    </div>
    <div className="form-group">
    <button type="button" className="btn btn-primary">CREATE</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default CreateProjectForm;