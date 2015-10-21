import { expect, use as chaiUse } from 'chai';
import * as sinon from 'sinon';
/* tslint:disable */
chaiUse(require('sinon-chai'));
/* tslint:enable */

import {
  Request, Response
} from 'express';

import {
  Record,
  RecordDatabase
} from '../../shared/record/record';

import {
  RecordHandler
} from './record';

describe('Record Handler', function() {
  let recordMap: RecordDatabase;
  let handler: RecordHandler;

  beforeEach(function() {
    recordMap = new Map<string, Record>();
    handler = new RecordHandler(recordMap);
  });

  describe('Saving', function() {
    it('saves', function() {
      let q: Request = <Request><any>{
        params: {
          id: 'clip-1'
        },
        body: {
          label: 'Tape 1',
          family: 'Tapes',
          medium: '3/4"',
          stories: [ {
            slug: 'Story 1',
            date: new Date('10/15/2015'),
            format: 'VO',
            runtime: '5:30'
          } ]
        }
      };
      let s: Response = <Response><any>{
        status: function(status: number): Response {
          return this;
        },
        end: sinon.spy()
      };
      let statusSpy = sinon.spy(s, 'status');
      handler.save(q, s);
      expect(statusSpy).to.have.been.calledWithExactly(204);
      expect(recordMap.has('tape_1')).to.be.true;
      let record = recordMap.get('tape_1');
      expect(record.stories.length).to.equal(1);
    });
  });
});
