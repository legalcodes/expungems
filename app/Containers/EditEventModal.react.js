import React from 'react';

export default function (){
    return (
      <div>
        <div className="modal fade" id="eventModal" tabIndex="-1" role="dialog" aria-labelledby="eventModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="eventModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                Hello I am a modal
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


