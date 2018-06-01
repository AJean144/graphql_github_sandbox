import moment from 'moment'

export const groupCommitsByDate = (commitsToGroup) => {
    let groupedDates = {}
    let groupedCommits = {};

    for (let i = 0; i < commitsToGroup.length; i++) {
        let commitDate;
        if (commitsToGroup[i].hasOwnProperty('committedDate')) {
            commitDate = new Date(commitsToGroup[i].committedDate);
        } else {
            commitDate = new Date(commitsToGroup[i].node.commit.committedDate);
        }

        let day = commitDate.getDate();
        if (!groupedDates[day]) {
            groupedDates[day] = [];
            groupedCommits[day] = [];
        }
        groupedDates[day].push(moment(commitDate).format('MMM DD, YYYY'));

        if (commitsToGroup[i].hasOwnProperty('committedDate')) {
            groupedCommits[day].push(commitsToGroup[i]);
        } else {
            groupedCommits[day].push(commitsToGroup[i].node.commit);
        }
    }

    let commits = []
    let commitDates = [];
    for (let day in groupedDates) {
        commitDates.push(groupedDates[day])
    }

    for (let commit in groupedCommits) {
        commits.push(groupedCommits[commit])
    }

    let commitDatesSet = new Set([].concat.apply([], commitDates))
    let allCommitDates = [...commitDatesSet].sort((a, b) => new Date(b) - new Date(a))

    return { allCommitDates, commits }
}