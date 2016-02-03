import alt from '../alt';
import ContributionsActions from '../actions/ContributionsActions';

class ContributionsStore {
  constructor() {
    this.bindActions(ContributionsActions);
    this.contributions = [];
  }

  onGetContributionsSuccess(data) {
    this.contributions = data;
  }

  onGetContributionsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(ContributionsStore);