import styled, { css } from 'styled-components'

import TaskListCard from '../TaskListCard'


const Container = styled.div`
  margin: 0em 1.5em;
`


function TaskList() {
  const data = [
    {
      id: 1,
      name: 'Order deliver the template',
      description: 'There is a text there is a bit hard to read, no idea if it is meant to be there or not but if it is meant to be in the email can you please make it visible',
      create_date: '23 Apr, 2021 11:17 PM',
      updated_date: '24 Apr 2021 16:22 PM',
      status: 'Created',
      priority: 'High',
    },
    {
      id: 2,
      name: 'Remove name restriction in dish form',
      description: 'Remove that restriction. Allow the chef to write whatever they want in that field (it’s a feedback from a chef)',
      create_date: '12 Mar, 2021 23:27 PM',
      updated_date: '21 Mar, 2021 21:17 PM',
      status: 'In Progress',
      priority: 'Urgent',
    },
    {
      id: 3,
      name: 'Change colors of order status',
      description: 'When status is "created" make the color RED. When status is "accepted" then GREEN is perfect and "delivered" the BLUE is perfect too.',
      create_date: '09 Mar, 2021 22:08 PM',
      updated_date: '11 Mar, 2021 11:10 PM',
      status: 'Created',
      priority: 'Medium',
    },
    {
      id: 4,
      name: 'Set default filter to today',
      description: 'Please set the default value of that filter to "Today".',
      create_date: '12 Mar, 2021 11:12 AM',
      updated_date: '21 Apr, 2021 08:15 PM',
      status: 'Completed',
      priority: 'Low',
    }
  ]
  return (
    <Container>
      {
        data.map(item => <TaskListCard key={item.id} data={item} />)
      }
    </Container>
  )
}

export default TaskList
