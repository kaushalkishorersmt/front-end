import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proposalOne: Proposal = new Proposal(1, 'ZadP Soluction Pvt. Ltd.', 'http://portfolio.kaushal.com', 'Ruby on Rails', 150, 120, 15, 'kaushal@shopknekt.com')
  proposalTwo: Proposal = new Proposal(2, 'ABC Soluction Pvt. Ltd.', 'http://portfolio.ajil.com', 'Ruby on Rails', 150, 120, 15, 'ajil@shopknekt.com')
  proposalThree: Proposal = new Proposal(3, 'XYZ Soluction Pvt. Ltd.', 'http://portfolio.rutul.com', 'Ruby on Rails', 150, 120, 15, 'rutul@shopknekt.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
