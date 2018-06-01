import React, { Component } from 'react'
import Layout from './UIKit/Layout'
import Input from './UIKit/Input'
import CommitContainer from './UIKit/CommitContainer'
import { groupCommitsByDate } from '../utils/groupCommitsByDate'

class AppLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allCommitDates: [],
            commits: [],
            initialCommits: [],
        }
    }

    componentDidMount() {
        this.handleGroupByDates()
    }

    filterList = (event) => {
        let updatedList = [].concat.apply([], this.state.initialCommits)
        updatedList = updatedList.filter((commit) => {
            return commit.messageHeadline.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState(groupCommitsByDate(updatedList))
    }

    handleGroupByDates = () => {
        const { data } = this.props
        const groupedCommits = groupCommitsByDate(data.repository.commitComments.edges)

        this.setState({
            ...groupedCommits,
            initialCommits: groupedCommits.commits
        })
    }

    render() {
        return (
            <Layout>
                <Input type='text' placeholder="Search commit messages..." onChange={this.filterList} />
                <CommitContainer
                    commitGroups={this.state.commits}
                    allCommitDates={this.state.allCommitDates}
                />
            </Layout>
        )
    }
}

export default AppLayout;