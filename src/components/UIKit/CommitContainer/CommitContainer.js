import React, { Fragment } from 'react'
import Container from './styles/Container'
import Message from './styles/Message'
import Author from './styles/Author'
import Text from './styles/Text'

const CommitContainer = ({ commitGroups, allCommitDates }) => (
    commitGroups.map((commits, i) => (
        <Fragment key={i}>
            <Text>Commits on {allCommitDates[i]}</Text>
            {commits.map((commit, index) => (
                <Container key={index} isGroupEnd={index === (commits.length - 1)}>
                    <Fragment>
                        <Message>{commit.messageHeadline}</Message>
                        <Author>{commit.author && commit.author.name} commited</Author>
                    </Fragment>
                </Container>
            ))}
        </Fragment>
    ))
)

export default CommitContainer;