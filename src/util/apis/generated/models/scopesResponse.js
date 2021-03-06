/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ScopesResponse.
 */
class ScopesResponse {
  /**
   * Create a ScopesResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ScopesResponse
   *
   * @returns {object} metadata of ScopesResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ScopesResponse',
      type: {
        name: 'Composite',
        className: 'ScopesResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ScopeResponseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ScopeResponse'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ScopesResponse;
