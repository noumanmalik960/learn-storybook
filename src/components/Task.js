import React from 'react'
import PropTypes from 'prop-types'


export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">

        <input type='text' value={title} readOnly={true} placeholder="Input title" />
      </div>

      {/* stopProppagation stops propagation e.g if we have it set, it won't render any child component inside of it */}
      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`}></span>
          </a>
        )}
      </div>
    </div>
  )
}
// even if we don't use TS or Flow we can use React's built-in typechecking abilities and we can do it through prop-types. on invalid value it shows a warning on the console. for more info go to `https://reactjs.org/docs/typechecking-with-proptypes.html`

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
}