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

const models = require('./index');

/**
 * Protectable Container Class.
 *
 * @extends models['Resource']
 */
class ProtectableContainerResource extends models['Resource'] {
  /**
   * Create a ProtectableContainerResource.
   * @member {object} [properties] ProtectableContainerResource properties
   * @member {string} [properties.friendlyName] Friendly name of the container.
   * @member {string} [properties.backupManagementType] Type of backup
   * managemenent for the container. Possible values include: 'Invalid',
   * 'AzureIaasVM', 'MAB', 'DPM', 'AzureBackupServer', 'AzureSql',
   * 'AzureStorage', 'AzureWorkload', 'DefaultBackup'
   * @member {string} [properties.healthStatus] Status of health of the
   * container.
   * @member {string} [properties.containerId] Fabric Id of the container such
   * as ARM Id.
   * @member {string} [properties.protectableContainerType] Polymorphic
   * Discriminator
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProtectableContainerResource
   *
   * @returns {object} metadata of ProtectableContainerResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProtectableContainerResource',
      type: {
        name: 'Composite',
        className: 'ProtectableContainerResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'protectableContainerType',
                clientName: 'protectableContainerType'
              },
              uberParent: 'ProtectableContainer',
              className: 'ProtectableContainer'
            }
          }
        }
      }
    };
  }
}

module.exports = ProtectableContainerResource;
