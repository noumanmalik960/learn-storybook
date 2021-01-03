import React from "react";
import { PureInboxScreen } from './InboxScreen'
import { Provider } from 'react-redux'
import { action } from '@storybook/addon-actions'
import * as TaskListStories from './TaskList.stories'

// as we needed a redux store for this to work because it needed data so we 
// are creating a simple mock of it
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    }
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
}


export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  // we want to include a store for all stories so here's how we do it
  decorators: [story => <Provider store={store}>{story()}</Provider>]
}

const Template = args => <PureInboxScreen {...args} />

// The bind() method creates a new function that, when called, has its this
//  keyword set to the provided value, with a given sequence of arguments 
//  preceding any provided when the new function is called.
export const Default = Template.bind({})
// Here we did not give any args because we don't need any

export const Error = Template.bind({})

Error.args = {
  error: 'Something',
}