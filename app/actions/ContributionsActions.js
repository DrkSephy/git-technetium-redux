import alt from '../alt';

class ContributionsActions {
  constructor() {
    this.generateActions(
      'getContributionsSuccess',
      'getContributionsFail'
    );
  }

  getContributions() {
    $.ajax({ url: '/api/commits' })
      .done((data) => {
        console.log(data);
        this.actions.getContributionsSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getContributionsFail(jqXhr);
      });
  }
}

export default alt.createActions(ContributionsActions);