import styled, { css } from 'styled-components'

import { colors } from '../../../assets/global'

import { Heading, Text, Tag, Box, Flex } from '../../elements'


const Container = styled.div`
  display: flex;
  padding: 16px;
  margin-bottom: 4px;
  background-color: ${colors.alpha};
`

function TaskListCard(props) {
  const { data } = props

  return (
    <Container>
      <Box width="100%">
        <Heading>{data.name}</Heading>
        <Text>{data.description}</Text>
        <Flex margin="12px 0 0 0">
          <Text margin="0 12px 0 0">
            Status:
            <Tag color={colors.primary}>
              {data.status}
            </Tag>
          </Text>
          <Text>
            Priority:
            <Tag color={colors.primary}>
              {data.priority}
            </Tag>
          </Text>
        </Flex>
      </Box>
      <Box width="300px" padding="0 0 0 12px">
        <Text textAlign="right">
          Created at {data.create_date}
        </Text>
        <Text textAlign="right">
          Updated at {data.updated_date}
        </Text>
      </Box>
    </Container>
  )
}

export default TaskListCard
