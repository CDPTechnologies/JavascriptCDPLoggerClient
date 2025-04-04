// TODO Guide on how this file was generated
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.DBMessaging = (function() {

    /**
     * Namespace DBMessaging.
     * @exports DBMessaging
     * @namespace
     */
    var DBMessaging = {};

    DBMessaging.Protobuf = (function() {

        /**
         * Namespace Protobuf.
         * @memberof DBMessaging
         * @namespace
         */
        var Protobuf = {};

        Protobuf.Container = (function() {

            /**
             * Properties of a Container.
             * @memberof DBMessaging.Protobuf
             * @interface IContainer
             * @property {DBMessaging.Protobuf.Container.Type|null} [messageType] Container messageType
             * @property {DBMessaging.Protobuf.ISignalInfoRequest|null} [signalInfoRequest] Container signalInfoRequest
             * @property {DBMessaging.Protobuf.ISignalInfoResponse|null} [signalInfoResponse] Container signalInfoResponse
             * @property {DBMessaging.Protobuf.ISignalDataRequest|null} [signalDataRequest] Container signalDataRequest
             * @property {DBMessaging.Protobuf.ISignalDataResponse|null} [signalDataResponse] Container signalDataResponse
             * @property {DBMessaging.Protobuf.ICriterionLimitsRequest|null} [criterionLimitsRequest] Container criterionLimitsRequest
             * @property {DBMessaging.Protobuf.ICriterionLimitsResponse|null} [criterionLimitsResponse] Container criterionLimitsResponse
             * @property {DBMessaging.Protobuf.IVersionRequest|null} [versionRequest] Container versionRequest
             * @property {DBMessaging.Protobuf.IVersionResponse|null} [versionResponse] Container versionResponse
             * @property {DBMessaging.Protobuf.IError|null} [error] Container error
             * @property {DBMessaging.Protobuf.ITimeRequest|null} [timeRequest] Container timeRequest
             * @property {DBMessaging.Protobuf.ITimeResponse|null} [timeResponse] Container timeResponse
             * @property {DBMessaging.Protobuf.IEventSenderTagsRequest|null} [eventSenderTagsRequest] Container eventSenderTagsRequest
             * @property {DBMessaging.Protobuf.IEventSenderTagsResponse|null} [eventSenderTagsResponse] Container eventSenderTagsResponse
             * @property {DBMessaging.Protobuf.ICountEventsRequest|null} [countEventsRequest] Container countEventsRequest
             * @property {DBMessaging.Protobuf.ICountEventsResponse|null} [countEventsResponse] Container countEventsResponse
             * @property {DBMessaging.Protobuf.IEventsRequest|null} [eventsRequest] Container eventsRequest
             * @property {DBMessaging.Protobuf.IEventsResponse|null} [eventsResponse] Container eventsResponse
             */

            /**
             * Constructs a new Container.
             * @memberof DBMessaging.Protobuf
             * @classdesc Common union-style base type for all Protobuf messages in DB.
             * @implements IContainer
             * @constructor
             * @param {DBMessaging.Protobuf.IContainer=} [properties] Properties to set
             */
            function Container(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Container messageType.
             * @member {DBMessaging.Protobuf.Container.Type} messageType
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.messageType = 1;

            /**
             * Container signalInfoRequest.
             * @member {DBMessaging.Protobuf.ISignalInfoRequest|null|undefined} signalInfoRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.signalInfoRequest = null;

            /**
             * Container signalInfoResponse.
             * @member {DBMessaging.Protobuf.ISignalInfoResponse|null|undefined} signalInfoResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.signalInfoResponse = null;

            /**
             * Container signalDataRequest.
             * @member {DBMessaging.Protobuf.ISignalDataRequest|null|undefined} signalDataRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.signalDataRequest = null;

            /**
             * Container signalDataResponse.
             * @member {DBMessaging.Protobuf.ISignalDataResponse|null|undefined} signalDataResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.signalDataResponse = null;

            /**
             * Container criterionLimitsRequest.
             * @member {DBMessaging.Protobuf.ICriterionLimitsRequest|null|undefined} criterionLimitsRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.criterionLimitsRequest = null;

            /**
             * Container criterionLimitsResponse.
             * @member {DBMessaging.Protobuf.ICriterionLimitsResponse|null|undefined} criterionLimitsResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.criterionLimitsResponse = null;

            /**
             * Container versionRequest.
             * @member {DBMessaging.Protobuf.IVersionRequest|null|undefined} versionRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.versionRequest = null;

            /**
             * Container versionResponse.
             * @member {DBMessaging.Protobuf.IVersionResponse|null|undefined} versionResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.versionResponse = null;

            /**
             * Container error.
             * @member {DBMessaging.Protobuf.IError|null|undefined} error
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.error = null;

            /**
             * Container timeRequest.
             * @member {DBMessaging.Protobuf.ITimeRequest|null|undefined} timeRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.timeRequest = null;

            /**
             * Container timeResponse.
             * @member {DBMessaging.Protobuf.ITimeResponse|null|undefined} timeResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.timeResponse = null;

            /**
             * Container eventSenderTagsRequest.
             * @member {DBMessaging.Protobuf.IEventSenderTagsRequest|null|undefined} eventSenderTagsRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.eventSenderTagsRequest = null;

            /**
             * Container eventSenderTagsResponse.
             * @member {DBMessaging.Protobuf.IEventSenderTagsResponse|null|undefined} eventSenderTagsResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.eventSenderTagsResponse = null;

            /**
             * Container countEventsRequest.
             * @member {DBMessaging.Protobuf.ICountEventsRequest|null|undefined} countEventsRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.countEventsRequest = null;

            /**
             * Container countEventsResponse.
             * @member {DBMessaging.Protobuf.ICountEventsResponse|null|undefined} countEventsResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.countEventsResponse = null;

            /**
             * Container eventsRequest.
             * @member {DBMessaging.Protobuf.IEventsRequest|null|undefined} eventsRequest
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.eventsRequest = null;

            /**
             * Container eventsResponse.
             * @member {DBMessaging.Protobuf.IEventsResponse|null|undefined} eventsResponse
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             */
            Container.prototype.eventsResponse = null;

            /**
             * Creates a new Container instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {DBMessaging.Protobuf.IContainer=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.Container} Container instance
             */
            Container.create = function create(properties) {
                return new Container(properties);
            };

            /**
             * Encodes the specified Container message. Does not implicitly {@link DBMessaging.Protobuf.Container.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {DBMessaging.Protobuf.IContainer} message Container message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Container.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
                if (message.signalInfoRequest != null && Object.hasOwnProperty.call(message, "signalInfoRequest"))
                    $root.DBMessaging.Protobuf.SignalInfoRequest.encode(message.signalInfoRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.signalInfoResponse != null && Object.hasOwnProperty.call(message, "signalInfoResponse"))
                    $root.DBMessaging.Protobuf.SignalInfoResponse.encode(message.signalInfoResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.signalDataRequest != null && Object.hasOwnProperty.call(message, "signalDataRequest"))
                    $root.DBMessaging.Protobuf.SignalDataRequest.encode(message.signalDataRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.signalDataResponse != null && Object.hasOwnProperty.call(message, "signalDataResponse"))
                    $root.DBMessaging.Protobuf.SignalDataResponse.encode(message.signalDataResponse, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.criterionLimitsRequest != null && Object.hasOwnProperty.call(message, "criterionLimitsRequest"))
                    $root.DBMessaging.Protobuf.CriterionLimitsRequest.encode(message.criterionLimitsRequest, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.criterionLimitsResponse != null && Object.hasOwnProperty.call(message, "criterionLimitsResponse"))
                    $root.DBMessaging.Protobuf.CriterionLimitsResponse.encode(message.criterionLimitsResponse, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.versionRequest != null && Object.hasOwnProperty.call(message, "versionRequest"))
                    $root.DBMessaging.Protobuf.VersionRequest.encode(message.versionRequest, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.versionResponse != null && Object.hasOwnProperty.call(message, "versionResponse"))
                    $root.DBMessaging.Protobuf.VersionResponse.encode(message.versionResponse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.DBMessaging.Protobuf.Error.encode(message.error, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.timeRequest != null && Object.hasOwnProperty.call(message, "timeRequest"))
                    $root.DBMessaging.Protobuf.TimeRequest.encode(message.timeRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.timeResponse != null && Object.hasOwnProperty.call(message, "timeResponse"))
                    $root.DBMessaging.Protobuf.TimeResponse.encode(message.timeResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.eventSenderTagsRequest != null && Object.hasOwnProperty.call(message, "eventSenderTagsRequest"))
                    $root.DBMessaging.Protobuf.EventSenderTagsRequest.encode(message.eventSenderTagsRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.eventSenderTagsResponse != null && Object.hasOwnProperty.call(message, "eventSenderTagsResponse"))
                    $root.DBMessaging.Protobuf.EventSenderTagsResponse.encode(message.eventSenderTagsResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.countEventsRequest != null && Object.hasOwnProperty.call(message, "countEventsRequest"))
                    $root.DBMessaging.Protobuf.CountEventsRequest.encode(message.countEventsRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.countEventsResponse != null && Object.hasOwnProperty.call(message, "countEventsResponse"))
                    $root.DBMessaging.Protobuf.CountEventsResponse.encode(message.countEventsResponse, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                if (message.eventsRequest != null && Object.hasOwnProperty.call(message, "eventsRequest"))
                    $root.DBMessaging.Protobuf.EventsRequest.encode(message.eventsRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.eventsResponse != null && Object.hasOwnProperty.call(message, "eventsResponse"))
                    $root.DBMessaging.Protobuf.EventsResponse.encode(message.eventsResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Container message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.Container.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {DBMessaging.Protobuf.IContainer} message Container message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Container.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Container message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.Container} Container
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Container.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.Container();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.signalInfoRequest = $root.DBMessaging.Protobuf.SignalInfoRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.signalInfoResponse = $root.DBMessaging.Protobuf.SignalInfoResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.signalDataRequest = $root.DBMessaging.Protobuf.SignalDataRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.signalDataResponse = $root.DBMessaging.Protobuf.SignalDataResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.criterionLimitsRequest = $root.DBMessaging.Protobuf.CriterionLimitsRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.criterionLimitsResponse = $root.DBMessaging.Protobuf.CriterionLimitsResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.versionRequest = $root.DBMessaging.Protobuf.VersionRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.versionResponse = $root.DBMessaging.Protobuf.VersionResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.error = $root.DBMessaging.Protobuf.Error.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.timeRequest = $root.DBMessaging.Protobuf.TimeRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.timeResponse = $root.DBMessaging.Protobuf.TimeResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.eventSenderTagsRequest = $root.DBMessaging.Protobuf.EventSenderTagsRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 14: {
                            message.eventSenderTagsResponse = $root.DBMessaging.Protobuf.EventSenderTagsResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 15: {
                            message.countEventsRequest = $root.DBMessaging.Protobuf.CountEventsRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 16: {
                            message.countEventsResponse = $root.DBMessaging.Protobuf.CountEventsResponse.decode(reader, reader.uint32());
                            break;
                        }
                    case 17: {
                            message.eventsRequest = $root.DBMessaging.Protobuf.EventsRequest.decode(reader, reader.uint32());
                            break;
                        }
                    case 18: {
                            message.eventsResponse = $root.DBMessaging.Protobuf.EventsResponse.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Container message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.Container} Container
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Container.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Container message.
             * @function verify
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Container.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageType != null && message.hasOwnProperty("messageType"))
                    switch (message.messageType) {
                    default:
                        return "messageType: enum value expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                        break;
                    }
                if (message.signalInfoRequest != null && message.hasOwnProperty("signalInfoRequest")) {
                    var error = $root.DBMessaging.Protobuf.SignalInfoRequest.verify(message.signalInfoRequest);
                    if (error)
                        return "signalInfoRequest." + error;
                }
                if (message.signalInfoResponse != null && message.hasOwnProperty("signalInfoResponse")) {
                    var error = $root.DBMessaging.Protobuf.SignalInfoResponse.verify(message.signalInfoResponse);
                    if (error)
                        return "signalInfoResponse." + error;
                }
                if (message.signalDataRequest != null && message.hasOwnProperty("signalDataRequest")) {
                    var error = $root.DBMessaging.Protobuf.SignalDataRequest.verify(message.signalDataRequest);
                    if (error)
                        return "signalDataRequest." + error;
                }
                if (message.signalDataResponse != null && message.hasOwnProperty("signalDataResponse")) {
                    var error = $root.DBMessaging.Protobuf.SignalDataResponse.verify(message.signalDataResponse);
                    if (error)
                        return "signalDataResponse." + error;
                }
                if (message.criterionLimitsRequest != null && message.hasOwnProperty("criterionLimitsRequest")) {
                    var error = $root.DBMessaging.Protobuf.CriterionLimitsRequest.verify(message.criterionLimitsRequest);
                    if (error)
                        return "criterionLimitsRequest." + error;
                }
                if (message.criterionLimitsResponse != null && message.hasOwnProperty("criterionLimitsResponse")) {
                    var error = $root.DBMessaging.Protobuf.CriterionLimitsResponse.verify(message.criterionLimitsResponse);
                    if (error)
                        return "criterionLimitsResponse." + error;
                }
                if (message.versionRequest != null && message.hasOwnProperty("versionRequest")) {
                    var error = $root.DBMessaging.Protobuf.VersionRequest.verify(message.versionRequest);
                    if (error)
                        return "versionRequest." + error;
                }
                if (message.versionResponse != null && message.hasOwnProperty("versionResponse")) {
                    var error = $root.DBMessaging.Protobuf.VersionResponse.verify(message.versionResponse);
                    if (error)
                        return "versionResponse." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.DBMessaging.Protobuf.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.timeRequest != null && message.hasOwnProperty("timeRequest")) {
                    var error = $root.DBMessaging.Protobuf.TimeRequest.verify(message.timeRequest);
                    if (error)
                        return "timeRequest." + error;
                }
                if (message.timeResponse != null && message.hasOwnProperty("timeResponse")) {
                    var error = $root.DBMessaging.Protobuf.TimeResponse.verify(message.timeResponse);
                    if (error)
                        return "timeResponse." + error;
                }
                if (message.eventSenderTagsRequest != null && message.hasOwnProperty("eventSenderTagsRequest")) {
                    var error = $root.DBMessaging.Protobuf.EventSenderTagsRequest.verify(message.eventSenderTagsRequest);
                    if (error)
                        return "eventSenderTagsRequest." + error;
                }
                if (message.eventSenderTagsResponse != null && message.hasOwnProperty("eventSenderTagsResponse")) {
                    var error = $root.DBMessaging.Protobuf.EventSenderTagsResponse.verify(message.eventSenderTagsResponse);
                    if (error)
                        return "eventSenderTagsResponse." + error;
                }
                if (message.countEventsRequest != null && message.hasOwnProperty("countEventsRequest")) {
                    var error = $root.DBMessaging.Protobuf.CountEventsRequest.verify(message.countEventsRequest);
                    if (error)
                        return "countEventsRequest." + error;
                }
                if (message.countEventsResponse != null && message.hasOwnProperty("countEventsResponse")) {
                    var error = $root.DBMessaging.Protobuf.CountEventsResponse.verify(message.countEventsResponse);
                    if (error)
                        return "countEventsResponse." + error;
                }
                if (message.eventsRequest != null && message.hasOwnProperty("eventsRequest")) {
                    var error = $root.DBMessaging.Protobuf.EventsRequest.verify(message.eventsRequest);
                    if (error)
                        return "eventsRequest." + error;
                }
                if (message.eventsResponse != null && message.hasOwnProperty("eventsResponse")) {
                    var error = $root.DBMessaging.Protobuf.EventsResponse.verify(message.eventsResponse);
                    if (error)
                        return "eventsResponse." + error;
                }
                return null;
            };

            /**
             * Creates a Container message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.Container} Container
             */
            Container.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.Container)
                    return object;
                var message = new $root.DBMessaging.Protobuf.Container();
                switch (object.messageType) {
                default:
                    if (typeof object.messageType === "number") {
                        message.messageType = object.messageType;
                        break;
                    }
                    break;
                case "eSignalInfoRequest":
                case 1:
                    message.messageType = 1;
                    break;
                case "eSignalInfoResponse":
                case 2:
                    message.messageType = 2;
                    break;
                case "eSignalDataRequest":
                case 3:
                    message.messageType = 3;
                    break;
                case "eSignalDataResponse":
                case 4:
                    message.messageType = 4;
                    break;
                case "eCriterionLimitsRequest":
                case 5:
                    message.messageType = 5;
                    break;
                case "eCriterionLimitsResponse":
                case 6:
                    message.messageType = 6;
                    break;
                case "eVersionRequest":
                case 7:
                    message.messageType = 7;
                    break;
                case "eVersionResponse":
                case 8:
                    message.messageType = 8;
                    break;
                case "eError":
                case 9:
                    message.messageType = 9;
                    break;
                case "eTimeRequest":
                case 10:
                    message.messageType = 10;
                    break;
                case "eTimeResponse":
                case 11:
                    message.messageType = 11;
                    break;
                case "eEventSenderTagsRequest":
                case 12:
                    message.messageType = 12;
                    break;
                case "eEventSenderTagsResponse":
                case 13:
                    message.messageType = 13;
                    break;
                case "eCountEventsRequest":
                case 14:
                    message.messageType = 14;
                    break;
                case "eCountEventsResponse":
                case 15:
                    message.messageType = 15;
                    break;
                case "eEventsRequest":
                case 16:
                    message.messageType = 16;
                    break;
                case "eEventsResponse":
                case 17:
                    message.messageType = 17;
                    break;
                }
                if (object.signalInfoRequest != null) {
                    if (typeof object.signalInfoRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.signalInfoRequest: object expected");
                    message.signalInfoRequest = $root.DBMessaging.Protobuf.SignalInfoRequest.fromObject(object.signalInfoRequest);
                }
                if (object.signalInfoResponse != null) {
                    if (typeof object.signalInfoResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.signalInfoResponse: object expected");
                    message.signalInfoResponse = $root.DBMessaging.Protobuf.SignalInfoResponse.fromObject(object.signalInfoResponse);
                }
                if (object.signalDataRequest != null) {
                    if (typeof object.signalDataRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.signalDataRequest: object expected");
                    message.signalDataRequest = $root.DBMessaging.Protobuf.SignalDataRequest.fromObject(object.signalDataRequest);
                }
                if (object.signalDataResponse != null) {
                    if (typeof object.signalDataResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.signalDataResponse: object expected");
                    message.signalDataResponse = $root.DBMessaging.Protobuf.SignalDataResponse.fromObject(object.signalDataResponse);
                }
                if (object.criterionLimitsRequest != null) {
                    if (typeof object.criterionLimitsRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.criterionLimitsRequest: object expected");
                    message.criterionLimitsRequest = $root.DBMessaging.Protobuf.CriterionLimitsRequest.fromObject(object.criterionLimitsRequest);
                }
                if (object.criterionLimitsResponse != null) {
                    if (typeof object.criterionLimitsResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.criterionLimitsResponse: object expected");
                    message.criterionLimitsResponse = $root.DBMessaging.Protobuf.CriterionLimitsResponse.fromObject(object.criterionLimitsResponse);
                }
                if (object.versionRequest != null) {
                    if (typeof object.versionRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.versionRequest: object expected");
                    message.versionRequest = $root.DBMessaging.Protobuf.VersionRequest.fromObject(object.versionRequest);
                }
                if (object.versionResponse != null) {
                    if (typeof object.versionResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.versionResponse: object expected");
                    message.versionResponse = $root.DBMessaging.Protobuf.VersionResponse.fromObject(object.versionResponse);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.error: object expected");
                    message.error = $root.DBMessaging.Protobuf.Error.fromObject(object.error);
                }
                if (object.timeRequest != null) {
                    if (typeof object.timeRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.timeRequest: object expected");
                    message.timeRequest = $root.DBMessaging.Protobuf.TimeRequest.fromObject(object.timeRequest);
                }
                if (object.timeResponse != null) {
                    if (typeof object.timeResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.timeResponse: object expected");
                    message.timeResponse = $root.DBMessaging.Protobuf.TimeResponse.fromObject(object.timeResponse);
                }
                if (object.eventSenderTagsRequest != null) {
                    if (typeof object.eventSenderTagsRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.eventSenderTagsRequest: object expected");
                    message.eventSenderTagsRequest = $root.DBMessaging.Protobuf.EventSenderTagsRequest.fromObject(object.eventSenderTagsRequest);
                }
                if (object.eventSenderTagsResponse != null) {
                    if (typeof object.eventSenderTagsResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.eventSenderTagsResponse: object expected");
                    message.eventSenderTagsResponse = $root.DBMessaging.Protobuf.EventSenderTagsResponse.fromObject(object.eventSenderTagsResponse);
                }
                if (object.countEventsRequest != null) {
                    if (typeof object.countEventsRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.countEventsRequest: object expected");
                    message.countEventsRequest = $root.DBMessaging.Protobuf.CountEventsRequest.fromObject(object.countEventsRequest);
                }
                if (object.countEventsResponse != null) {
                    if (typeof object.countEventsResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.countEventsResponse: object expected");
                    message.countEventsResponse = $root.DBMessaging.Protobuf.CountEventsResponse.fromObject(object.countEventsResponse);
                }
                if (object.eventsRequest != null) {
                    if (typeof object.eventsRequest !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.eventsRequest: object expected");
                    message.eventsRequest = $root.DBMessaging.Protobuf.EventsRequest.fromObject(object.eventsRequest);
                }
                if (object.eventsResponse != null) {
                    if (typeof object.eventsResponse !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Container.eventsResponse: object expected");
                    message.eventsResponse = $root.DBMessaging.Protobuf.EventsResponse.fromObject(object.eventsResponse);
                }
                return message;
            };

            /**
             * Creates a plain object from a Container message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {DBMessaging.Protobuf.Container} message Container
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Container.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.messageType = options.enums === String ? "eSignalInfoRequest" : 1;
                    object.signalInfoRequest = null;
                    object.signalInfoResponse = null;
                    object.signalDataRequest = null;
                    object.signalDataResponse = null;
                    object.criterionLimitsRequest = null;
                    object.criterionLimitsResponse = null;
                    object.versionRequest = null;
                    object.versionResponse = null;
                    object.error = null;
                    object.timeRequest = null;
                    object.timeResponse = null;
                    object.eventSenderTagsRequest = null;
                    object.eventSenderTagsResponse = null;
                    object.countEventsRequest = null;
                    object.countEventsResponse = null;
                    object.eventsRequest = null;
                    object.eventsResponse = null;
                }
                if (message.messageType != null && message.hasOwnProperty("messageType"))
                    object.messageType = options.enums === String ? $root.DBMessaging.Protobuf.Container.Type[message.messageType] === undefined ? message.messageType : $root.DBMessaging.Protobuf.Container.Type[message.messageType] : message.messageType;
                if (message.signalInfoRequest != null && message.hasOwnProperty("signalInfoRequest"))
                    object.signalInfoRequest = $root.DBMessaging.Protobuf.SignalInfoRequest.toObject(message.signalInfoRequest, options);
                if (message.signalInfoResponse != null && message.hasOwnProperty("signalInfoResponse"))
                    object.signalInfoResponse = $root.DBMessaging.Protobuf.SignalInfoResponse.toObject(message.signalInfoResponse, options);
                if (message.signalDataRequest != null && message.hasOwnProperty("signalDataRequest"))
                    object.signalDataRequest = $root.DBMessaging.Protobuf.SignalDataRequest.toObject(message.signalDataRequest, options);
                if (message.signalDataResponse != null && message.hasOwnProperty("signalDataResponse"))
                    object.signalDataResponse = $root.DBMessaging.Protobuf.SignalDataResponse.toObject(message.signalDataResponse, options);
                if (message.criterionLimitsRequest != null && message.hasOwnProperty("criterionLimitsRequest"))
                    object.criterionLimitsRequest = $root.DBMessaging.Protobuf.CriterionLimitsRequest.toObject(message.criterionLimitsRequest, options);
                if (message.criterionLimitsResponse != null && message.hasOwnProperty("criterionLimitsResponse"))
                    object.criterionLimitsResponse = $root.DBMessaging.Protobuf.CriterionLimitsResponse.toObject(message.criterionLimitsResponse, options);
                if (message.versionRequest != null && message.hasOwnProperty("versionRequest"))
                    object.versionRequest = $root.DBMessaging.Protobuf.VersionRequest.toObject(message.versionRequest, options);
                if (message.versionResponse != null && message.hasOwnProperty("versionResponse"))
                    object.versionResponse = $root.DBMessaging.Protobuf.VersionResponse.toObject(message.versionResponse, options);
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.DBMessaging.Protobuf.Error.toObject(message.error, options);
                if (message.timeRequest != null && message.hasOwnProperty("timeRequest"))
                    object.timeRequest = $root.DBMessaging.Protobuf.TimeRequest.toObject(message.timeRequest, options);
                if (message.timeResponse != null && message.hasOwnProperty("timeResponse"))
                    object.timeResponse = $root.DBMessaging.Protobuf.TimeResponse.toObject(message.timeResponse, options);
                if (message.eventSenderTagsRequest != null && message.hasOwnProperty("eventSenderTagsRequest"))
                    object.eventSenderTagsRequest = $root.DBMessaging.Protobuf.EventSenderTagsRequest.toObject(message.eventSenderTagsRequest, options);
                if (message.eventSenderTagsResponse != null && message.hasOwnProperty("eventSenderTagsResponse"))
                    object.eventSenderTagsResponse = $root.DBMessaging.Protobuf.EventSenderTagsResponse.toObject(message.eventSenderTagsResponse, options);
                if (message.countEventsRequest != null && message.hasOwnProperty("countEventsRequest"))
                    object.countEventsRequest = $root.DBMessaging.Protobuf.CountEventsRequest.toObject(message.countEventsRequest, options);
                if (message.countEventsResponse != null && message.hasOwnProperty("countEventsResponse"))
                    object.countEventsResponse = $root.DBMessaging.Protobuf.CountEventsResponse.toObject(message.countEventsResponse, options);
                if (message.eventsRequest != null && message.hasOwnProperty("eventsRequest"))
                    object.eventsRequest = $root.DBMessaging.Protobuf.EventsRequest.toObject(message.eventsRequest, options);
                if (message.eventsResponse != null && message.hasOwnProperty("eventsResponse"))
                    object.eventsResponse = $root.DBMessaging.Protobuf.EventsResponse.toObject(message.eventsResponse, options);
                return object;
            };

            /**
             * Converts this Container to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.Container
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Container.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Container
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.Container
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Container.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.Container";
            };

            /**
             * Type enum.
             * @name DBMessaging.Protobuf.Container.Type
             * @enum {number}
             * @property {number} eSignalInfoRequest=1 eSignalInfoRequest value
             * @property {number} eSignalInfoResponse=2 eSignalInfoResponse value
             * @property {number} eSignalDataRequest=3 eSignalDataRequest value
             * @property {number} eSignalDataResponse=4 eSignalDataResponse value
             * @property {number} eCriterionLimitsRequest=5 eCriterionLimitsRequest value
             * @property {number} eCriterionLimitsResponse=6 eCriterionLimitsResponse value
             * @property {number} eVersionRequest=7 eVersionRequest value
             * @property {number} eVersionResponse=8 eVersionResponse value
             * @property {number} eError=9 eError value
             * @property {number} eTimeRequest=10 eTimeRequest value
             * @property {number} eTimeResponse=11 eTimeResponse value
             * @property {number} eEventSenderTagsRequest=12 eEventSenderTagsRequest value
             * @property {number} eEventSenderTagsResponse=13 eEventSenderTagsResponse value
             * @property {number} eCountEventsRequest=14 eCountEventsRequest value
             * @property {number} eCountEventsResponse=15 eCountEventsResponse value
             * @property {number} eEventsRequest=16 eEventsRequest value
             * @property {number} eEventsResponse=17 eEventsResponse value
             */
            Container.Type = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "eSignalInfoRequest"] = 1;
                values[valuesById[2] = "eSignalInfoResponse"] = 2;
                values[valuesById[3] = "eSignalDataRequest"] = 3;
                values[valuesById[4] = "eSignalDataResponse"] = 4;
                values[valuesById[5] = "eCriterionLimitsRequest"] = 5;
                values[valuesById[6] = "eCriterionLimitsResponse"] = 6;
                values[valuesById[7] = "eVersionRequest"] = 7;
                values[valuesById[8] = "eVersionResponse"] = 8;
                values[valuesById[9] = "eError"] = 9;
                values[valuesById[10] = "eTimeRequest"] = 10;
                values[valuesById[11] = "eTimeResponse"] = 11;
                values[valuesById[12] = "eEventSenderTagsRequest"] = 12;
                values[valuesById[13] = "eEventSenderTagsResponse"] = 13;
                values[valuesById[14] = "eCountEventsRequest"] = 14;
                values[valuesById[15] = "eCountEventsResponse"] = 15;
                values[valuesById[16] = "eEventsRequest"] = 16;
                values[valuesById[17] = "eEventsResponse"] = 17;
                return values;
            })();

            return Container;
        })();

        Protobuf.SignalInfoRequest = (function() {

            /**
             * Properties of a SignalInfoRequest.
             * @memberof DBMessaging.Protobuf
             * @interface ISignalInfoRequest
             * @property {number|null} [requestId] SignalInfoRequest requestId
             */

            /**
             * Constructs a new SignalInfoRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a SignalInfoRequest.
             * @implements ISignalInfoRequest
             * @constructor
             * @param {DBMessaging.Protobuf.ISignalInfoRequest=} [properties] Properties to set
             */
            function SignalInfoRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignalInfoRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @instance
             */
            SignalInfoRequest.prototype.requestId = 0;

            /**
             * Creates a new SignalInfoRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {DBMessaging.Protobuf.ISignalInfoRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.SignalInfoRequest} SignalInfoRequest instance
             */
            SignalInfoRequest.create = function create(properties) {
                return new SignalInfoRequest(properties);
            };

            /**
             * Encodes the specified SignalInfoRequest message. Does not implicitly {@link DBMessaging.Protobuf.SignalInfoRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {DBMessaging.Protobuf.ISignalInfoRequest} message SignalInfoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalInfoRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                return writer;
            };

            /**
             * Encodes the specified SignalInfoRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.SignalInfoRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {DBMessaging.Protobuf.ISignalInfoRequest} message SignalInfoRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignalInfoRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.SignalInfoRequest} SignalInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalInfoRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.SignalInfoRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SignalInfoRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.SignalInfoRequest} SignalInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalInfoRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignalInfoRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignalInfoRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                return null;
            };

            /**
             * Creates a SignalInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.SignalInfoRequest} SignalInfoRequest
             */
            SignalInfoRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.SignalInfoRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.SignalInfoRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SignalInfoRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {DBMessaging.Protobuf.SignalInfoRequest} message SignalInfoRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignalInfoRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                return object;
            };

            /**
             * Converts this SignalInfoRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalInfoRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignalInfoRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.SignalInfoRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignalInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.SignalInfoRequest";
            };

            return SignalInfoRequest;
        })();

        Protobuf.SignalInfoResponse = (function() {

            /**
             * Properties of a SignalInfoResponse.
             * @memberof DBMessaging.Protobuf
             * @interface ISignalInfoResponse
             * @property {number|null} [requestId] SignalInfoResponse requestId
             * @property {Array.<string>|null} [name] SignalInfoResponse name
             * @property {Array.<number>|null} [id] SignalInfoResponse id
             * @property {Array.<ICD.Protobuf.CDPValueType>|null} [type] SignalInfoResponse type
             * @property {Array.<string>|null} [path] SignalInfoResponse path
             * @property {Array.<DBMessaging.Protobuf.ITagMap>|null} [tagMap] SignalInfoResponse tagMap
             */

            /**
             * Constructs a new SignalInfoResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a SignalInfoResponse.
             * @implements ISignalInfoResponse
             * @constructor
             * @param {DBMessaging.Protobuf.ISignalInfoResponse=} [properties] Properties to set
             */
            function SignalInfoResponse(properties) {
                this.name = [];
                this.id = [];
                this.type = [];
                this.path = [];
                this.tagMap = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignalInfoResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @instance
             */
            SignalInfoResponse.prototype.requestId = 0;

            /**
             * SignalInfoResponse name.
             * @member {Array.<string>} name
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @instance
             */
            SignalInfoResponse.prototype.name = $util.emptyArray;

            /**
             * SignalInfoResponse id.
             * @member {Array.<number>} id
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @instance
             */
            SignalInfoResponse.prototype.id = $util.emptyArray;

            /**
             * SignalInfoResponse type.
             * @member {Array.<ICD.Protobuf.CDPValueType>} type
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @instance
             */
            SignalInfoResponse.prototype.type = $util.emptyArray;

            /**
             * SignalInfoResponse path.
             * @member {Array.<string>} path
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @instance
             */
            SignalInfoResponse.prototype.path = $util.emptyArray;

            /**
             * SignalInfoResponse tagMap.
             * @member {Array.<DBMessaging.Protobuf.ITagMap>} tagMap
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @instance
             */
            SignalInfoResponse.prototype.tagMap = $util.emptyArray;

            /**
             * Creates a new SignalInfoResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {DBMessaging.Protobuf.ISignalInfoResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.SignalInfoResponse} SignalInfoResponse instance
             */
            SignalInfoResponse.create = function create(properties) {
                return new SignalInfoResponse(properties);
            };

            /**
             * Encodes the specified SignalInfoResponse message. Does not implicitly {@link DBMessaging.Protobuf.SignalInfoResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {DBMessaging.Protobuf.ISignalInfoResponse} message SignalInfoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalInfoResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.name != null && message.name.length)
                    for (var i = 0; i < message.name.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name[i]);
                if (message.id != null && message.id.length)
                    for (var i = 0; i < message.id.length; ++i)
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.id[i]);
                if (message.type != null && message.type.length)
                    for (var i = 0; i < message.type.length; ++i)
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type[i]);
                if (message.path != null && message.path.length)
                    for (var i = 0; i < message.path.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.path[i]);
                if (message.tagMap != null && message.tagMap.length)
                    for (var i = 0; i < message.tagMap.length; ++i)
                        $root.DBMessaging.Protobuf.TagMap.encode(message.tagMap[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SignalInfoResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.SignalInfoResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {DBMessaging.Protobuf.ISignalInfoResponse} message SignalInfoResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignalInfoResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.SignalInfoResponse} SignalInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalInfoResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.SignalInfoResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push(reader.string());
                            break;
                        }
                    case 3: {
                            if (!(message.id && message.id.length))
                                message.id = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.id.push(reader.uint32());
                            } else
                                message.id.push(reader.uint32());
                            break;
                        }
                    case 4: {
                            if (!(message.type && message.type.length))
                                message.type = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.type.push(reader.int32());
                            } else
                                message.type.push(reader.int32());
                            break;
                        }
                    case 5: {
                            if (!(message.path && message.path.length))
                                message.path = [];
                            message.path.push(reader.string());
                            break;
                        }
                    case 6: {
                            if (!(message.tagMap && message.tagMap.length))
                                message.tagMap = [];
                            message.tagMap.push($root.DBMessaging.Protobuf.TagMap.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SignalInfoResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.SignalInfoResponse} SignalInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalInfoResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignalInfoResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignalInfoResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.name != null && message.hasOwnProperty("name")) {
                    if (!Array.isArray(message.name))
                        return "name: array expected";
                    for (var i = 0; i < message.name.length; ++i)
                        if (!$util.isString(message.name[i]))
                            return "name: string[] expected";
                }
                if (message.id != null && message.hasOwnProperty("id")) {
                    if (!Array.isArray(message.id))
                        return "id: array expected";
                    for (var i = 0; i < message.id.length; ++i)
                        if (!$util.isInteger(message.id[i]))
                            return "id: integer[] expected";
                }
                if (message.type != null && message.hasOwnProperty("type")) {
                    if (!Array.isArray(message.type))
                        return "type: array expected";
                    for (var i = 0; i < message.type.length; ++i)
                        switch (message.type[i]) {
                        default:
                            return "type: enum value[] expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 100:
                            break;
                        }
                }
                if (message.path != null && message.hasOwnProperty("path")) {
                    if (!Array.isArray(message.path))
                        return "path: array expected";
                    for (var i = 0; i < message.path.length; ++i)
                        if (!$util.isString(message.path[i]))
                            return "path: string[] expected";
                }
                if (message.tagMap != null && message.hasOwnProperty("tagMap")) {
                    if (!Array.isArray(message.tagMap))
                        return "tagMap: array expected";
                    for (var i = 0; i < message.tagMap.length; ++i) {
                        var error = $root.DBMessaging.Protobuf.TagMap.verify(message.tagMap[i]);
                        if (error)
                            return "tagMap." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SignalInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.SignalInfoResponse} SignalInfoResponse
             */
            SignalInfoResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.SignalInfoResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.SignalInfoResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.name) {
                    if (!Array.isArray(object.name))
                        throw TypeError(".DBMessaging.Protobuf.SignalInfoResponse.name: array expected");
                    message.name = [];
                    for (var i = 0; i < object.name.length; ++i)
                        message.name[i] = String(object.name[i]);
                }
                if (object.id) {
                    if (!Array.isArray(object.id))
                        throw TypeError(".DBMessaging.Protobuf.SignalInfoResponse.id: array expected");
                    message.id = [];
                    for (var i = 0; i < object.id.length; ++i)
                        message.id[i] = object.id[i] >>> 0;
                }
                if (object.type) {
                    if (!Array.isArray(object.type))
                        throw TypeError(".DBMessaging.Protobuf.SignalInfoResponse.type: array expected");
                    message.type = [];
                    for (var i = 0; i < object.type.length; ++i)
                        switch (object.type[i]) {
                        default:
                            if (typeof object.type[i] === "number") {
                                message.type[i] = object.type[i];
                                break;
                            }
                        case "eUNDEFINED":
                        case 0:
                            message.type[i] = 0;
                            break;
                        case "eDOUBLE":
                        case 1:
                            message.type[i] = 1;
                            break;
                        case "eUINT64":
                        case 2:
                            message.type[i] = 2;
                            break;
                        case "eINT64":
                        case 3:
                            message.type[i] = 3;
                            break;
                        case "eFLOAT":
                        case 4:
                            message.type[i] = 4;
                            break;
                        case "eUINT":
                        case 5:
                            message.type[i] = 5;
                            break;
                        case "eINT":
                        case 6:
                            message.type[i] = 6;
                            break;
                        case "eUSHORT":
                        case 7:
                            message.type[i] = 7;
                            break;
                        case "eSHORT":
                        case 8:
                            message.type[i] = 8;
                            break;
                        case "eUCHAR":
                        case 9:
                            message.type[i] = 9;
                            break;
                        case "eCHAR":
                        case 10:
                            message.type[i] = 10;
                            break;
                        case "eBOOL":
                        case 11:
                            message.type[i] = 11;
                            break;
                        case "eSTRING":
                        case 12:
                            message.type[i] = 12;
                            break;
                        case "eUSERTYPE":
                        case 100:
                            message.type[i] = 100;
                            break;
                        }
                }
                if (object.path) {
                    if (!Array.isArray(object.path))
                        throw TypeError(".DBMessaging.Protobuf.SignalInfoResponse.path: array expected");
                    message.path = [];
                    for (var i = 0; i < object.path.length; ++i)
                        message.path[i] = String(object.path[i]);
                }
                if (object.tagMap) {
                    if (!Array.isArray(object.tagMap))
                        throw TypeError(".DBMessaging.Protobuf.SignalInfoResponse.tagMap: array expected");
                    message.tagMap = [];
                    for (var i = 0; i < object.tagMap.length; ++i) {
                        if (typeof object.tagMap[i] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.SignalInfoResponse.tagMap: object expected");
                        message.tagMap[i] = $root.DBMessaging.Protobuf.TagMap.fromObject(object.tagMap[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SignalInfoResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {DBMessaging.Protobuf.SignalInfoResponse} message SignalInfoResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignalInfoResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.name = [];
                    object.id = [];
                    object.type = [];
                    object.path = [];
                    object.tagMap = [];
                }
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.name && message.name.length) {
                    object.name = [];
                    for (var j = 0; j < message.name.length; ++j)
                        object.name[j] = message.name[j];
                }
                if (message.id && message.id.length) {
                    object.id = [];
                    for (var j = 0; j < message.id.length; ++j)
                        object.id[j] = message.id[j];
                }
                if (message.type && message.type.length) {
                    object.type = [];
                    for (var j = 0; j < message.type.length; ++j)
                        object.type[j] = options.enums === String ? $root.ICD.Protobuf.CDPValueType[message.type[j]] === undefined ? message.type[j] : $root.ICD.Protobuf.CDPValueType[message.type[j]] : message.type[j];
                }
                if (message.path && message.path.length) {
                    object.path = [];
                    for (var j = 0; j < message.path.length; ++j)
                        object.path[j] = message.path[j];
                }
                if (message.tagMap && message.tagMap.length) {
                    object.tagMap = [];
                    for (var j = 0; j < message.tagMap.length; ++j)
                        object.tagMap[j] = $root.DBMessaging.Protobuf.TagMap.toObject(message.tagMap[j], options);
                }
                return object;
            };

            /**
             * Converts this SignalInfoResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalInfoResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignalInfoResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.SignalInfoResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignalInfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.SignalInfoResponse";
            };

            return SignalInfoResponse;
        })();

        Protobuf.TagInfo = (function() {

            /**
             * Properties of a TagInfo.
             * @memberof DBMessaging.Protobuf
             * @interface ITagInfo
             * @property {string|null} [value] TagInfo value
             * @property {string|null} [source] TagInfo source
             */

            /**
             * Constructs a new TagInfo.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a TagInfo.
             * @implements ITagInfo
             * @constructor
             * @param {DBMessaging.Protobuf.ITagInfo=} [properties] Properties to set
             */
            function TagInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TagInfo value.
             * @member {string} value
             * @memberof DBMessaging.Protobuf.TagInfo
             * @instance
             */
            TagInfo.prototype.value = "";

            /**
             * TagInfo source.
             * @member {string} source
             * @memberof DBMessaging.Protobuf.TagInfo
             * @instance
             */
            TagInfo.prototype.source = "";

            /**
             * Creates a new TagInfo instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {DBMessaging.Protobuf.ITagInfo=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.TagInfo} TagInfo instance
             */
            TagInfo.create = function create(properties) {
                return new TagInfo(properties);
            };

            /**
             * Encodes the specified TagInfo message. Does not implicitly {@link DBMessaging.Protobuf.TagInfo.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {DBMessaging.Protobuf.ITagInfo} message TagInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TagInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.source);
                return writer;
            };

            /**
             * Encodes the specified TagInfo message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.TagInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {DBMessaging.Protobuf.ITagInfo} message TagInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TagInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TagInfo message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.TagInfo} TagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TagInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.TagInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.string();
                            break;
                        }
                    case 2: {
                            message.source = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TagInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.TagInfo} TagInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TagInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TagInfo message.
             * @function verify
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TagInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                if (message.source != null && message.hasOwnProperty("source"))
                    if (!$util.isString(message.source))
                        return "source: string expected";
                return null;
            };

            /**
             * Creates a TagInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.TagInfo} TagInfo
             */
            TagInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.TagInfo)
                    return object;
                var message = new $root.DBMessaging.Protobuf.TagInfo();
                if (object.value != null)
                    message.value = String(object.value);
                if (object.source != null)
                    message.source = String(object.source);
                return message;
            };

            /**
             * Creates a plain object from a TagInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {DBMessaging.Protobuf.TagInfo} message TagInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TagInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.value = "";
                    object.source = "";
                }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.source != null && message.hasOwnProperty("source"))
                    object.source = message.source;
                return object;
            };

            /**
             * Converts this TagInfo to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.TagInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TagInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TagInfo
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.TagInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TagInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.TagInfo";
            };

            return TagInfo;
        })();

        Protobuf.TagMap = (function() {

            /**
             * Properties of a TagMap.
             * @memberof DBMessaging.Protobuf
             * @interface ITagMap
             * @property {Object.<string,DBMessaging.Protobuf.ITagInfo>|null} [tags] TagMap tags
             */

            /**
             * Constructs a new TagMap.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a TagMap.
             * @implements ITagMap
             * @constructor
             * @param {DBMessaging.Protobuf.ITagMap=} [properties] Properties to set
             */
            function TagMap(properties) {
                this.tags = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TagMap tags.
             * @member {Object.<string,DBMessaging.Protobuf.ITagInfo>} tags
             * @memberof DBMessaging.Protobuf.TagMap
             * @instance
             */
            TagMap.prototype.tags = $util.emptyObject;

            /**
             * Creates a new TagMap instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {DBMessaging.Protobuf.ITagMap=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.TagMap} TagMap instance
             */
            TagMap.create = function create(properties) {
                return new TagMap(properties);
            };

            /**
             * Encodes the specified TagMap message. Does not implicitly {@link DBMessaging.Protobuf.TagMap.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {DBMessaging.Protobuf.ITagMap} message TagMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TagMap.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tags != null && Object.hasOwnProperty.call(message, "tags"))
                    for (var keys = Object.keys(message.tags), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.DBMessaging.Protobuf.TagInfo.encode(message.tags[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified TagMap message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.TagMap.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {DBMessaging.Protobuf.ITagMap} message TagMap message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TagMap.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TagMap message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.TagMap} TagMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TagMap.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.TagMap(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.tags === $util.emptyObject)
                                message.tags = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.DBMessaging.Protobuf.TagInfo.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.tags[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TagMap message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.TagMap} TagMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TagMap.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TagMap message.
             * @function verify
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TagMap.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!$util.isObject(message.tags))
                        return "tags: object expected";
                    var key = Object.keys(message.tags);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.DBMessaging.Protobuf.TagInfo.verify(message.tags[key[i]]);
                        if (error)
                            return "tags." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TagMap message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.TagMap} TagMap
             */
            TagMap.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.TagMap)
                    return object;
                var message = new $root.DBMessaging.Protobuf.TagMap();
                if (object.tags) {
                    if (typeof object.tags !== "object")
                        throw TypeError(".DBMessaging.Protobuf.TagMap.tags: object expected");
                    message.tags = {};
                    for (var keys = Object.keys(object.tags), i = 0; i < keys.length; ++i) {
                        if (typeof object.tags[keys[i]] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.TagMap.tags: object expected");
                        message.tags[keys[i]] = $root.DBMessaging.Protobuf.TagInfo.fromObject(object.tags[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TagMap message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {DBMessaging.Protobuf.TagMap} message TagMap
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TagMap.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.tags = {};
                var keys2;
                if (message.tags && (keys2 = Object.keys(message.tags)).length) {
                    object.tags = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.tags[keys2[j]] = $root.DBMessaging.Protobuf.TagInfo.toObject(message.tags[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this TagMap to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.TagMap
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TagMap.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TagMap
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.TagMap
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TagMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.TagMap";
            };

            return TagMap;
        })();

        Protobuf.SignalDataRequest = (function() {

            /**
             * Properties of a SignalDataRequest.
             * @memberof DBMessaging.Protobuf
             * @interface ISignalDataRequest
             * @property {number|null} [requestId] SignalDataRequest requestId
             * @property {Array.<number>|null} [signalId] SignalDataRequest signalId
             * @property {number|null} [criterionMin] SignalDataRequest criterionMin
             * @property {number|null} [criterionMax] SignalDataRequest criterionMax
             * @property {number|null} [numOfDatapoints] SignalDataRequest numOfDatapoints
             * @property {number|null} [limit] SignalDataRequest limit
             */

            /**
             * Constructs a new SignalDataRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a SignalDataRequest.
             * @implements ISignalDataRequest
             * @constructor
             * @param {DBMessaging.Protobuf.ISignalDataRequest=} [properties] Properties to set
             */
            function SignalDataRequest(properties) {
                this.signalId = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignalDataRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @instance
             */
            SignalDataRequest.prototype.requestId = 0;

            /**
             * SignalDataRequest signalId.
             * @member {Array.<number>} signalId
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @instance
             */
            SignalDataRequest.prototype.signalId = $util.emptyArray;

            /**
             * SignalDataRequest criterionMin.
             * @member {number} criterionMin
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @instance
             */
            SignalDataRequest.prototype.criterionMin = 0;

            /**
             * SignalDataRequest criterionMax.
             * @member {number} criterionMax
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @instance
             */
            SignalDataRequest.prototype.criterionMax = 0;

            /**
             * SignalDataRequest numOfDatapoints.
             * @member {number} numOfDatapoints
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @instance
             */
            SignalDataRequest.prototype.numOfDatapoints = 0;

            /**
             * SignalDataRequest limit.
             * @member {number} limit
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @instance
             */
            SignalDataRequest.prototype.limit = 0;

            /**
             * Creates a new SignalDataRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.SignalDataRequest} SignalDataRequest instance
             */
            SignalDataRequest.create = function create(properties) {
                return new SignalDataRequest(properties);
            };

            /**
             * Encodes the specified SignalDataRequest message. Does not implicitly {@link DBMessaging.Protobuf.SignalDataRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataRequest} message SignalDataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalDataRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.signalId != null && message.signalId.length)
                    for (var i = 0; i < message.signalId.length; ++i)
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.signalId[i]);
                if (message.criterionMin != null && Object.hasOwnProperty.call(message, "criterionMin"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.criterionMin);
                if (message.criterionMax != null && Object.hasOwnProperty.call(message, "criterionMax"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.criterionMax);
                if (message.numOfDatapoints != null && Object.hasOwnProperty.call(message, "numOfDatapoints"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.numOfDatapoints);
                if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.limit);
                return writer;
            };

            /**
             * Encodes the specified SignalDataRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.SignalDataRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataRequest} message SignalDataRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalDataRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignalDataRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.SignalDataRequest} SignalDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalDataRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.SignalDataRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            if (!(message.signalId && message.signalId.length))
                                message.signalId = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.signalId.push(reader.uint32());
                            } else
                                message.signalId.push(reader.uint32());
                            break;
                        }
                    case 3: {
                            message.criterionMin = reader.double();
                            break;
                        }
                    case 4: {
                            message.criterionMax = reader.double();
                            break;
                        }
                    case 5: {
                            message.numOfDatapoints = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.limit = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SignalDataRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.SignalDataRequest} SignalDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalDataRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignalDataRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignalDataRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.signalId != null && message.hasOwnProperty("signalId")) {
                    if (!Array.isArray(message.signalId))
                        return "signalId: array expected";
                    for (var i = 0; i < message.signalId.length; ++i)
                        if (!$util.isInteger(message.signalId[i]))
                            return "signalId: integer[] expected";
                }
                if (message.criterionMin != null && message.hasOwnProperty("criterionMin"))
                    if (typeof message.criterionMin !== "number")
                        return "criterionMin: number expected";
                if (message.criterionMax != null && message.hasOwnProperty("criterionMax"))
                    if (typeof message.criterionMax !== "number")
                        return "criterionMax: number expected";
                if (message.numOfDatapoints != null && message.hasOwnProperty("numOfDatapoints"))
                    if (!$util.isInteger(message.numOfDatapoints))
                        return "numOfDatapoints: integer expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                return null;
            };

            /**
             * Creates a SignalDataRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.SignalDataRequest} SignalDataRequest
             */
            SignalDataRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.SignalDataRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.SignalDataRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.signalId) {
                    if (!Array.isArray(object.signalId))
                        throw TypeError(".DBMessaging.Protobuf.SignalDataRequest.signalId: array expected");
                    message.signalId = [];
                    for (var i = 0; i < object.signalId.length; ++i)
                        message.signalId[i] = object.signalId[i] >>> 0;
                }
                if (object.criterionMin != null)
                    message.criterionMin = Number(object.criterionMin);
                if (object.criterionMax != null)
                    message.criterionMax = Number(object.criterionMax);
                if (object.numOfDatapoints != null)
                    message.numOfDatapoints = object.numOfDatapoints >>> 0;
                if (object.limit != null)
                    message.limit = object.limit >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SignalDataRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {DBMessaging.Protobuf.SignalDataRequest} message SignalDataRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignalDataRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.signalId = [];
                if (options.defaults) {
                    object.requestId = 0;
                    object.criterionMin = 0;
                    object.criterionMax = 0;
                    object.numOfDatapoints = 0;
                    object.limit = 0;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.signalId && message.signalId.length) {
                    object.signalId = [];
                    for (var j = 0; j < message.signalId.length; ++j)
                        object.signalId[j] = message.signalId[j];
                }
                if (message.criterionMin != null && message.hasOwnProperty("criterionMin"))
                    object.criterionMin = options.json && !isFinite(message.criterionMin) ? String(message.criterionMin) : message.criterionMin;
                if (message.criterionMax != null && message.hasOwnProperty("criterionMax"))
                    object.criterionMax = options.json && !isFinite(message.criterionMax) ? String(message.criterionMax) : message.criterionMax;
                if (message.numOfDatapoints != null && message.hasOwnProperty("numOfDatapoints"))
                    object.numOfDatapoints = message.numOfDatapoints;
                if (message.limit != null && message.hasOwnProperty("limit"))
                    object.limit = message.limit;
                return object;
            };

            /**
             * Converts this SignalDataRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalDataRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignalDataRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.SignalDataRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignalDataRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.SignalDataRequest";
            };

            return SignalDataRequest;
        })();

        Protobuf.SignalDataResponse = (function() {

            /**
             * Properties of a SignalDataResponse.
             * @memberof DBMessaging.Protobuf
             * @interface ISignalDataResponse
             * @property {number|null} [requestId] SignalDataResponse requestId
             * @property {Array.<number>|null} [criterion] SignalDataResponse criterion
             * @property {Array.<DBMessaging.Protobuf.ISignalDataRow>|null} [row] SignalDataResponse row
             */

            /**
             * Constructs a new SignalDataResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a SignalDataResponse.
             * @implements ISignalDataResponse
             * @constructor
             * @param {DBMessaging.Protobuf.ISignalDataResponse=} [properties] Properties to set
             */
            function SignalDataResponse(properties) {
                this.criterion = [];
                this.row = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignalDataResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @instance
             */
            SignalDataResponse.prototype.requestId = 0;

            /**
             * SignalDataResponse criterion.
             * @member {Array.<number>} criterion
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @instance
             */
            SignalDataResponse.prototype.criterion = $util.emptyArray;

            /**
             * SignalDataResponse row.
             * @member {Array.<DBMessaging.Protobuf.ISignalDataRow>} row
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @instance
             */
            SignalDataResponse.prototype.row = $util.emptyArray;

            /**
             * Creates a new SignalDataResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.SignalDataResponse} SignalDataResponse instance
             */
            SignalDataResponse.create = function create(properties) {
                return new SignalDataResponse(properties);
            };

            /**
             * Encodes the specified SignalDataResponse message. Does not implicitly {@link DBMessaging.Protobuf.SignalDataResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataResponse} message SignalDataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalDataResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.criterion != null && message.criterion.length)
                    for (var i = 0; i < message.criterion.length; ++i)
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.criterion[i]);
                if (message.row != null && message.row.length)
                    for (var i = 0; i < message.row.length; ++i)
                        $root.DBMessaging.Protobuf.SignalDataRow.encode(message.row[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SignalDataResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.SignalDataResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataResponse} message SignalDataResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalDataResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignalDataResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.SignalDataResponse} SignalDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalDataResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.SignalDataResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            if (!(message.criterion && message.criterion.length))
                                message.criterion = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.criterion.push(reader.double());
                            } else
                                message.criterion.push(reader.double());
                            break;
                        }
                    case 3: {
                            if (!(message.row && message.row.length))
                                message.row = [];
                            message.row.push($root.DBMessaging.Protobuf.SignalDataRow.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SignalDataResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.SignalDataResponse} SignalDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalDataResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignalDataResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignalDataResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.criterion != null && message.hasOwnProperty("criterion")) {
                    if (!Array.isArray(message.criterion))
                        return "criterion: array expected";
                    for (var i = 0; i < message.criterion.length; ++i)
                        if (typeof message.criterion[i] !== "number")
                            return "criterion: number[] expected";
                }
                if (message.row != null && message.hasOwnProperty("row")) {
                    if (!Array.isArray(message.row))
                        return "row: array expected";
                    for (var i = 0; i < message.row.length; ++i) {
                        var error = $root.DBMessaging.Protobuf.SignalDataRow.verify(message.row[i]);
                        if (error)
                            return "row." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SignalDataResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.SignalDataResponse} SignalDataResponse
             */
            SignalDataResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.SignalDataResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.SignalDataResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.criterion) {
                    if (!Array.isArray(object.criterion))
                        throw TypeError(".DBMessaging.Protobuf.SignalDataResponse.criterion: array expected");
                    message.criterion = [];
                    for (var i = 0; i < object.criterion.length; ++i)
                        message.criterion[i] = Number(object.criterion[i]);
                }
                if (object.row) {
                    if (!Array.isArray(object.row))
                        throw TypeError(".DBMessaging.Protobuf.SignalDataResponse.row: array expected");
                    message.row = [];
                    for (var i = 0; i < object.row.length; ++i) {
                        if (typeof object.row[i] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.SignalDataResponse.row: object expected");
                        message.row[i] = $root.DBMessaging.Protobuf.SignalDataRow.fromObject(object.row[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SignalDataResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {DBMessaging.Protobuf.SignalDataResponse} message SignalDataResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignalDataResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.criterion = [];
                    object.row = [];
                }
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.criterion && message.criterion.length) {
                    object.criterion = [];
                    for (var j = 0; j < message.criterion.length; ++j)
                        object.criterion[j] = options.json && !isFinite(message.criterion[j]) ? String(message.criterion[j]) : message.criterion[j];
                }
                if (message.row && message.row.length) {
                    object.row = [];
                    for (var j = 0; j < message.row.length; ++j)
                        object.row[j] = $root.DBMessaging.Protobuf.SignalDataRow.toObject(message.row[j], options);
                }
                return object;
            };

            /**
             * Converts this SignalDataResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalDataResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignalDataResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.SignalDataResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignalDataResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.SignalDataResponse";
            };

            return SignalDataResponse;
        })();

        Protobuf.SignalDataRow = (function() {

            /**
             * Properties of a SignalDataRow.
             * @memberof DBMessaging.Protobuf
             * @interface ISignalDataRow
             * @property {Array.<number>|null} [signalId] SignalDataRow signalId
             * @property {Array.<ICD.Protobuf.IVariantValue>|null} [minValues] SignalDataRow minValues
             * @property {Array.<ICD.Protobuf.IVariantValue>|null} [maxValues] SignalDataRow maxValues
             * @property {Array.<ICD.Protobuf.IVariantValue>|null} [lastValues] SignalDataRow lastValues
             */

            /**
             * Constructs a new SignalDataRow.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a SignalDataRow.
             * @implements ISignalDataRow
             * @constructor
             * @param {DBMessaging.Protobuf.ISignalDataRow=} [properties] Properties to set
             */
            function SignalDataRow(properties) {
                this.signalId = [];
                this.minValues = [];
                this.maxValues = [];
                this.lastValues = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignalDataRow signalId.
             * @member {Array.<number>} signalId
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @instance
             */
            SignalDataRow.prototype.signalId = $util.emptyArray;

            /**
             * SignalDataRow minValues.
             * @member {Array.<ICD.Protobuf.IVariantValue>} minValues
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @instance
             */
            SignalDataRow.prototype.minValues = $util.emptyArray;

            /**
             * SignalDataRow maxValues.
             * @member {Array.<ICD.Protobuf.IVariantValue>} maxValues
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @instance
             */
            SignalDataRow.prototype.maxValues = $util.emptyArray;

            /**
             * SignalDataRow lastValues.
             * @member {Array.<ICD.Protobuf.IVariantValue>} lastValues
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @instance
             */
            SignalDataRow.prototype.lastValues = $util.emptyArray;

            /**
             * Creates a new SignalDataRow instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataRow=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.SignalDataRow} SignalDataRow instance
             */
            SignalDataRow.create = function create(properties) {
                return new SignalDataRow(properties);
            };

            /**
             * Encodes the specified SignalDataRow message. Does not implicitly {@link DBMessaging.Protobuf.SignalDataRow.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataRow} message SignalDataRow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalDataRow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.signalId != null && message.signalId.length)
                    for (var i = 0; i < message.signalId.length; ++i)
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.signalId[i]);
                if (message.minValues != null && message.minValues.length)
                    for (var i = 0; i < message.minValues.length; ++i)
                        $root.ICD.Protobuf.VariantValue.encode(message.minValues[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.maxValues != null && message.maxValues.length)
                    for (var i = 0; i < message.maxValues.length; ++i)
                        $root.ICD.Protobuf.VariantValue.encode(message.maxValues[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.lastValues != null && message.lastValues.length)
                    for (var i = 0; i < message.lastValues.length; ++i)
                        $root.ICD.Protobuf.VariantValue.encode(message.lastValues[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SignalDataRow message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.SignalDataRow.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {DBMessaging.Protobuf.ISignalDataRow} message SignalDataRow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignalDataRow.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignalDataRow message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.SignalDataRow} SignalDataRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalDataRow.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.SignalDataRow();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.signalId && message.signalId.length))
                                message.signalId = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.signalId.push(reader.uint32());
                            } else
                                message.signalId.push(reader.uint32());
                            break;
                        }
                    case 2: {
                            if (!(message.minValues && message.minValues.length))
                                message.minValues = [];
                            message.minValues.push($root.ICD.Protobuf.VariantValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(message.maxValues && message.maxValues.length))
                                message.maxValues = [];
                            message.maxValues.push($root.ICD.Protobuf.VariantValue.decode(reader, reader.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(message.lastValues && message.lastValues.length))
                                message.lastValues = [];
                            message.lastValues.push($root.ICD.Protobuf.VariantValue.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SignalDataRow message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.SignalDataRow} SignalDataRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignalDataRow.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignalDataRow message.
             * @function verify
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignalDataRow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.signalId != null && message.hasOwnProperty("signalId")) {
                    if (!Array.isArray(message.signalId))
                        return "signalId: array expected";
                    for (var i = 0; i < message.signalId.length; ++i)
                        if (!$util.isInteger(message.signalId[i]))
                            return "signalId: integer[] expected";
                }
                if (message.minValues != null && message.hasOwnProperty("minValues")) {
                    if (!Array.isArray(message.minValues))
                        return "minValues: array expected";
                    for (var i = 0; i < message.minValues.length; ++i) {
                        var error = $root.ICD.Protobuf.VariantValue.verify(message.minValues[i]);
                        if (error)
                            return "minValues." + error;
                    }
                }
                if (message.maxValues != null && message.hasOwnProperty("maxValues")) {
                    if (!Array.isArray(message.maxValues))
                        return "maxValues: array expected";
                    for (var i = 0; i < message.maxValues.length; ++i) {
                        var error = $root.ICD.Protobuf.VariantValue.verify(message.maxValues[i]);
                        if (error)
                            return "maxValues." + error;
                    }
                }
                if (message.lastValues != null && message.hasOwnProperty("lastValues")) {
                    if (!Array.isArray(message.lastValues))
                        return "lastValues: array expected";
                    for (var i = 0; i < message.lastValues.length; ++i) {
                        var error = $root.ICD.Protobuf.VariantValue.verify(message.lastValues[i]);
                        if (error)
                            return "lastValues." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SignalDataRow message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.SignalDataRow} SignalDataRow
             */
            SignalDataRow.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.SignalDataRow)
                    return object;
                var message = new $root.DBMessaging.Protobuf.SignalDataRow();
                if (object.signalId) {
                    if (!Array.isArray(object.signalId))
                        throw TypeError(".DBMessaging.Protobuf.SignalDataRow.signalId: array expected");
                    message.signalId = [];
                    for (var i = 0; i < object.signalId.length; ++i)
                        message.signalId[i] = object.signalId[i] >>> 0;
                }
                if (object.minValues) {
                    if (!Array.isArray(object.minValues))
                        throw TypeError(".DBMessaging.Protobuf.SignalDataRow.minValues: array expected");
                    message.minValues = [];
                    for (var i = 0; i < object.minValues.length; ++i) {
                        if (typeof object.minValues[i] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.SignalDataRow.minValues: object expected");
                        message.minValues[i] = $root.ICD.Protobuf.VariantValue.fromObject(object.minValues[i]);
                    }
                }
                if (object.maxValues) {
                    if (!Array.isArray(object.maxValues))
                        throw TypeError(".DBMessaging.Protobuf.SignalDataRow.maxValues: array expected");
                    message.maxValues = [];
                    for (var i = 0; i < object.maxValues.length; ++i) {
                        if (typeof object.maxValues[i] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.SignalDataRow.maxValues: object expected");
                        message.maxValues[i] = $root.ICD.Protobuf.VariantValue.fromObject(object.maxValues[i]);
                    }
                }
                if (object.lastValues) {
                    if (!Array.isArray(object.lastValues))
                        throw TypeError(".DBMessaging.Protobuf.SignalDataRow.lastValues: array expected");
                    message.lastValues = [];
                    for (var i = 0; i < object.lastValues.length; ++i) {
                        if (typeof object.lastValues[i] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.SignalDataRow.lastValues: object expected");
                        message.lastValues[i] = $root.ICD.Protobuf.VariantValue.fromObject(object.lastValues[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SignalDataRow message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {DBMessaging.Protobuf.SignalDataRow} message SignalDataRow
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignalDataRow.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.signalId = [];
                    object.minValues = [];
                    object.maxValues = [];
                    object.lastValues = [];
                }
                if (message.signalId && message.signalId.length) {
                    object.signalId = [];
                    for (var j = 0; j < message.signalId.length; ++j)
                        object.signalId[j] = message.signalId[j];
                }
                if (message.minValues && message.minValues.length) {
                    object.minValues = [];
                    for (var j = 0; j < message.minValues.length; ++j)
                        object.minValues[j] = $root.ICD.Protobuf.VariantValue.toObject(message.minValues[j], options);
                }
                if (message.maxValues && message.maxValues.length) {
                    object.maxValues = [];
                    for (var j = 0; j < message.maxValues.length; ++j)
                        object.maxValues[j] = $root.ICD.Protobuf.VariantValue.toObject(message.maxValues[j], options);
                }
                if (message.lastValues && message.lastValues.length) {
                    object.lastValues = [];
                    for (var j = 0; j < message.lastValues.length; ++j)
                        object.lastValues[j] = $root.ICD.Protobuf.VariantValue.toObject(message.lastValues[j], options);
                }
                return object;
            };

            /**
             * Converts this SignalDataRow to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignalDataRow.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignalDataRow
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.SignalDataRow
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignalDataRow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.SignalDataRow";
            };

            return SignalDataRow;
        })();

        Protobuf.CriterionLimitsRequest = (function() {

            /**
             * Properties of a CriterionLimitsRequest.
             * @memberof DBMessaging.Protobuf
             * @interface ICriterionLimitsRequest
             * @property {number|null} [requestId] CriterionLimitsRequest requestId
             */

            /**
             * Constructs a new CriterionLimitsRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a CriterionLimitsRequest.
             * @implements ICriterionLimitsRequest
             * @constructor
             * @param {DBMessaging.Protobuf.ICriterionLimitsRequest=} [properties] Properties to set
             */
            function CriterionLimitsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CriterionLimitsRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @instance
             */
            CriterionLimitsRequest.prototype.requestId = 0;

            /**
             * Creates a new CriterionLimitsRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {DBMessaging.Protobuf.ICriterionLimitsRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.CriterionLimitsRequest} CriterionLimitsRequest instance
             */
            CriterionLimitsRequest.create = function create(properties) {
                return new CriterionLimitsRequest(properties);
            };

            /**
             * Encodes the specified CriterionLimitsRequest message. Does not implicitly {@link DBMessaging.Protobuf.CriterionLimitsRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {DBMessaging.Protobuf.ICriterionLimitsRequest} message CriterionLimitsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CriterionLimitsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                return writer;
            };

            /**
             * Encodes the specified CriterionLimitsRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.CriterionLimitsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {DBMessaging.Protobuf.ICriterionLimitsRequest} message CriterionLimitsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CriterionLimitsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CriterionLimitsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.CriterionLimitsRequest} CriterionLimitsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CriterionLimitsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.CriterionLimitsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CriterionLimitsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.CriterionLimitsRequest} CriterionLimitsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CriterionLimitsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CriterionLimitsRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CriterionLimitsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                return null;
            };

            /**
             * Creates a CriterionLimitsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.CriterionLimitsRequest} CriterionLimitsRequest
             */
            CriterionLimitsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.CriterionLimitsRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.CriterionLimitsRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CriterionLimitsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {DBMessaging.Protobuf.CriterionLimitsRequest} message CriterionLimitsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CriterionLimitsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                return object;
            };

            /**
             * Converts this CriterionLimitsRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CriterionLimitsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CriterionLimitsRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.CriterionLimitsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CriterionLimitsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.CriterionLimitsRequest";
            };

            return CriterionLimitsRequest;
        })();

        Protobuf.CriterionLimitsResponse = (function() {

            /**
             * Properties of a CriterionLimitsResponse.
             * @memberof DBMessaging.Protobuf
             * @interface ICriterionLimitsResponse
             * @property {number|null} [requestId] CriterionLimitsResponse requestId
             * @property {number|null} [criterionMin] CriterionLimitsResponse criterionMin
             * @property {number|null} [criterionMax] CriterionLimitsResponse criterionMax
             */

            /**
             * Constructs a new CriterionLimitsResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a CriterionLimitsResponse.
             * @implements ICriterionLimitsResponse
             * @constructor
             * @param {DBMessaging.Protobuf.ICriterionLimitsResponse=} [properties] Properties to set
             */
            function CriterionLimitsResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CriterionLimitsResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @instance
             */
            CriterionLimitsResponse.prototype.requestId = 0;

            /**
             * CriterionLimitsResponse criterionMin.
             * @member {number} criterionMin
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @instance
             */
            CriterionLimitsResponse.prototype.criterionMin = 0;

            /**
             * CriterionLimitsResponse criterionMax.
             * @member {number} criterionMax
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @instance
             */
            CriterionLimitsResponse.prototype.criterionMax = 0;

            /**
             * Creates a new CriterionLimitsResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {DBMessaging.Protobuf.ICriterionLimitsResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.CriterionLimitsResponse} CriterionLimitsResponse instance
             */
            CriterionLimitsResponse.create = function create(properties) {
                return new CriterionLimitsResponse(properties);
            };

            /**
             * Encodes the specified CriterionLimitsResponse message. Does not implicitly {@link DBMessaging.Protobuf.CriterionLimitsResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {DBMessaging.Protobuf.ICriterionLimitsResponse} message CriterionLimitsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CriterionLimitsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.criterionMin != null && Object.hasOwnProperty.call(message, "criterionMin"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.criterionMin);
                if (message.criterionMax != null && Object.hasOwnProperty.call(message, "criterionMax"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.criterionMax);
                return writer;
            };

            /**
             * Encodes the specified CriterionLimitsResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.CriterionLimitsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {DBMessaging.Protobuf.ICriterionLimitsResponse} message CriterionLimitsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CriterionLimitsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CriterionLimitsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.CriterionLimitsResponse} CriterionLimitsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CriterionLimitsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.CriterionLimitsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.criterionMin = reader.double();
                            break;
                        }
                    case 3: {
                            message.criterionMax = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CriterionLimitsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.CriterionLimitsResponse} CriterionLimitsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CriterionLimitsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CriterionLimitsResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CriterionLimitsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.criterionMin != null && message.hasOwnProperty("criterionMin"))
                    if (typeof message.criterionMin !== "number")
                        return "criterionMin: number expected";
                if (message.criterionMax != null && message.hasOwnProperty("criterionMax"))
                    if (typeof message.criterionMax !== "number")
                        return "criterionMax: number expected";
                return null;
            };

            /**
             * Creates a CriterionLimitsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.CriterionLimitsResponse} CriterionLimitsResponse
             */
            CriterionLimitsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.CriterionLimitsResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.CriterionLimitsResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.criterionMin != null)
                    message.criterionMin = Number(object.criterionMin);
                if (object.criterionMax != null)
                    message.criterionMax = Number(object.criterionMax);
                return message;
            };

            /**
             * Creates a plain object from a CriterionLimitsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {DBMessaging.Protobuf.CriterionLimitsResponse} message CriterionLimitsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CriterionLimitsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = 0;
                    object.criterionMin = 0;
                    object.criterionMax = 0;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.criterionMin != null && message.hasOwnProperty("criterionMin"))
                    object.criterionMin = options.json && !isFinite(message.criterionMin) ? String(message.criterionMin) : message.criterionMin;
                if (message.criterionMax != null && message.hasOwnProperty("criterionMax"))
                    object.criterionMax = options.json && !isFinite(message.criterionMax) ? String(message.criterionMax) : message.criterionMax;
                return object;
            };

            /**
             * Converts this CriterionLimitsResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CriterionLimitsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CriterionLimitsResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.CriterionLimitsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CriterionLimitsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.CriterionLimitsResponse";
            };

            return CriterionLimitsResponse;
        })();

        Protobuf.Event = (function() {

            /**
             * Properties of an Event.
             * @memberof DBMessaging.Protobuf
             * @interface IEvent
             * @property {string|null} [sender] Event sender
             * @property {Object.<string,string>|null} [data] Event data
             * @property {number|null} [timestampSec] Event timestampSec
             * @property {number|Long|null} [id] Event id
             * @property {number|null} [code] Event code
             * @property {number|null} [status] Event status
             * @property {number|null} [logstampSec] Event logstampSec
             */

            /**
             * Constructs a new Event.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents an Event.
             * @implements IEvent
             * @constructor
             * @param {DBMessaging.Protobuf.IEvent=} [properties] Properties to set
             */
            function Event(properties) {
                this.data = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Event sender.
             * @member {string} sender
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             */
            Event.prototype.sender = "";

            /**
             * Event data.
             * @member {Object.<string,string>} data
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             */
            Event.prototype.data = $util.emptyObject;

            /**
             * Event timestampSec.
             * @member {number} timestampSec
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             */
            Event.prototype.timestampSec = 0;

            /**
             * Event id.
             * @member {number|Long} id
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             */
            Event.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Event code.
             * @member {number} code
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             */
            Event.prototype.code = 0;

            /**
             * Event status.
             * @member {number} status
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             */
            Event.prototype.status = 0;

            /**
             * Event logstampSec.
             * @member {number} logstampSec
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             */
            Event.prototype.logstampSec = 0;

            /**
             * Creates a new Event instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {DBMessaging.Protobuf.IEvent=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.Event} Event instance
             */
            Event.create = function create(properties) {
                return new Event(properties);
            };

            /**
             * Encodes the specified Event message. Does not implicitly {@link DBMessaging.Protobuf.Event.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {DBMessaging.Protobuf.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.sender);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    for (var keys = Object.keys(message.data), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.data[keys[i]]).ldelim();
                if (message.timestampSec != null && Object.hasOwnProperty.call(message, "timestampSec"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.timestampSec);
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.id);
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.code);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.status);
                if (message.logstampSec != null && Object.hasOwnProperty.call(message, "logstampSec"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.logstampSec);
                return writer;
            };

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.Event.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {DBMessaging.Protobuf.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.Event(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.sender = reader.string();
                            break;
                        }
                    case 2: {
                            if (message.data === $util.emptyObject)
                                message.data = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.data[key] = value;
                            break;
                        }
                    case 3: {
                            message.timestampSec = reader.double();
                            break;
                        }
                    case 4: {
                            message.id = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.code = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.status = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.logstampSec = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Event message.
             * @function verify
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Event.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sender != null && message.hasOwnProperty("sender"))
                    if (!$util.isString(message.sender))
                        return "sender: string expected";
                if (message.data != null && message.hasOwnProperty("data")) {
                    if (!$util.isObject(message.data))
                        return "data: object expected";
                    var key = Object.keys(message.data);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.data[key[i]]))
                            return "data: string{k:string} expected";
                }
                if (message.timestampSec != null && message.hasOwnProperty("timestampSec"))
                    if (typeof message.timestampSec !== "number")
                        return "timestampSec: number expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status))
                        return "status: integer expected";
                if (message.logstampSec != null && message.hasOwnProperty("logstampSec"))
                    if (typeof message.logstampSec !== "number")
                        return "logstampSec: number expected";
                return null;
            };

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.Event} Event
             */
            Event.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.Event)
                    return object;
                var message = new $root.DBMessaging.Protobuf.Event();
                if (object.sender != null)
                    message.sender = String(object.sender);
                if (object.data) {
                    if (typeof object.data !== "object")
                        throw TypeError(".DBMessaging.Protobuf.Event.data: object expected");
                    message.data = {};
                    for (var keys = Object.keys(object.data), i = 0; i < keys.length; ++i)
                        message.data[keys[i]] = String(object.data[keys[i]]);
                }
                if (object.timestampSec != null)
                    message.timestampSec = Number(object.timestampSec);
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.status != null)
                    message.status = object.status >>> 0;
                if (object.logstampSec != null)
                    message.logstampSec = Number(object.logstampSec);
                return message;
            };

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {DBMessaging.Protobuf.Event} message Event
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Event.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.data = {};
                if (options.defaults) {
                    object.sender = "";
                    object.timestampSec = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.id = options.longs === String ? "0" : 0;
                    object.code = 0;
                    object.status = 0;
                    object.logstampSec = 0;
                }
                if (message.sender != null && message.hasOwnProperty("sender"))
                    object.sender = message.sender;
                var keys2;
                if (message.data && (keys2 = Object.keys(message.data)).length) {
                    object.data = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.data[keys2[j]] = message.data[keys2[j]];
                }
                if (message.timestampSec != null && message.hasOwnProperty("timestampSec"))
                    object.timestampSec = options.json && !isFinite(message.timestampSec) ? String(message.timestampSec) : message.timestampSec;
                if (message.id != null && message.hasOwnProperty("id"))
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.logstampSec != null && message.hasOwnProperty("logstampSec"))
                    object.logstampSec = options.json && !isFinite(message.logstampSec) ? String(message.logstampSec) : message.logstampSec;
                return object;
            };

            /**
             * Converts this Event to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.Event
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Event.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Event
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.Event
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.Event";
            };

            return Event;
        })();

        Protobuf.EventQuery = (function() {

            /**
             * Properties of an EventQuery.
             * @memberof DBMessaging.Protobuf
             * @interface IEventQuery
             * @property {number|null} [timeRangeBegin] EventQuery timeRangeBegin
             * @property {number|null} [timeRangeEnd] EventQuery timeRangeEnd
             * @property {number|null} [codeMask] EventQuery codeMask
             * @property {number|null} [limit] EventQuery limit
             * @property {number|null} [offset] EventQuery offset
             * @property {number|null} [flags] EventQuery flags
             * @property {DBMessaging.Protobuf.EventQuery.IConditionList|null} [senderConditions] EventQuery senderConditions
             * @property {Object.<string,DBMessaging.Protobuf.EventQuery.IConditionList>|null} [dataConditions] EventQuery dataConditions
             */

            /**
             * Constructs a new EventQuery.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents an EventQuery.
             * @implements IEventQuery
             * @constructor
             * @param {DBMessaging.Protobuf.IEventQuery=} [properties] Properties to set
             */
            function EventQuery(properties) {
                this.dataConditions = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EventQuery timeRangeBegin.
             * @member {number} timeRangeBegin
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.timeRangeBegin = 0;

            /**
             * EventQuery timeRangeEnd.
             * @member {number} timeRangeEnd
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.timeRangeEnd = 0;

            /**
             * EventQuery codeMask.
             * @member {number} codeMask
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.codeMask = 0;

            /**
             * EventQuery limit.
             * @member {number} limit
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.limit = 0;

            /**
             * EventQuery offset.
             * @member {number} offset
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.offset = 0;

            /**
             * EventQuery flags.
             * @member {number} flags
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.flags = 0;

            /**
             * EventQuery senderConditions.
             * @member {DBMessaging.Protobuf.EventQuery.IConditionList|null|undefined} senderConditions
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.senderConditions = null;

            /**
             * EventQuery dataConditions.
             * @member {Object.<string,DBMessaging.Protobuf.EventQuery.IConditionList>} dataConditions
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             */
            EventQuery.prototype.dataConditions = $util.emptyObject;

            /**
             * Creates a new EventQuery instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {DBMessaging.Protobuf.IEventQuery=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.EventQuery} EventQuery instance
             */
            EventQuery.create = function create(properties) {
                return new EventQuery(properties);
            };

            /**
             * Encodes the specified EventQuery message. Does not implicitly {@link DBMessaging.Protobuf.EventQuery.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {DBMessaging.Protobuf.IEventQuery} message EventQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventQuery.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timeRangeBegin != null && Object.hasOwnProperty.call(message, "timeRangeBegin"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.timeRangeBegin);
                if (message.timeRangeEnd != null && Object.hasOwnProperty.call(message, "timeRangeEnd"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.timeRangeEnd);
                if (message.codeMask != null && Object.hasOwnProperty.call(message, "codeMask"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.codeMask);
                if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.limit);
                if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.offset);
                if (message.flags != null && Object.hasOwnProperty.call(message, "flags"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.flags);
                if (message.senderConditions != null && Object.hasOwnProperty.call(message, "senderConditions"))
                    $root.DBMessaging.Protobuf.EventQuery.ConditionList.encode(message.senderConditions, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.dataConditions != null && Object.hasOwnProperty.call(message, "dataConditions"))
                    for (var keys = Object.keys(message.dataConditions), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.DBMessaging.Protobuf.EventQuery.ConditionList.encode(message.dataConditions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified EventQuery message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.EventQuery.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {DBMessaging.Protobuf.IEventQuery} message EventQuery message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventQuery.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EventQuery message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.EventQuery} EventQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventQuery.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.EventQuery(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timeRangeBegin = reader.double();
                            break;
                        }
                    case 2: {
                            message.timeRangeEnd = reader.double();
                            break;
                        }
                    case 3: {
                            message.codeMask = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.limit = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.offset = reader.uint32();
                            break;
                        }
                    case 6: {
                            message.flags = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.senderConditions = $root.DBMessaging.Protobuf.EventQuery.ConditionList.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            if (message.dataConditions === $util.emptyObject)
                                message.dataConditions = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.DBMessaging.Protobuf.EventQuery.ConditionList.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.dataConditions[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EventQuery message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.EventQuery} EventQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventQuery.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EventQuery message.
             * @function verify
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventQuery.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timeRangeBegin != null && message.hasOwnProperty("timeRangeBegin"))
                    if (typeof message.timeRangeBegin !== "number")
                        return "timeRangeBegin: number expected";
                if (message.timeRangeEnd != null && message.hasOwnProperty("timeRangeEnd"))
                    if (typeof message.timeRangeEnd !== "number")
                        return "timeRangeEnd: number expected";
                if (message.codeMask != null && message.hasOwnProperty("codeMask"))
                    if (!$util.isInteger(message.codeMask))
                        return "codeMask: integer expected";
                if (message.limit != null && message.hasOwnProperty("limit"))
                    if (!$util.isInteger(message.limit))
                        return "limit: integer expected";
                if (message.offset != null && message.hasOwnProperty("offset"))
                    if (!$util.isInteger(message.offset))
                        return "offset: integer expected";
                if (message.flags != null && message.hasOwnProperty("flags"))
                    if (!$util.isInteger(message.flags))
                        return "flags: integer expected";
                if (message.senderConditions != null && message.hasOwnProperty("senderConditions")) {
                    var error = $root.DBMessaging.Protobuf.EventQuery.ConditionList.verify(message.senderConditions);
                    if (error)
                        return "senderConditions." + error;
                }
                if (message.dataConditions != null && message.hasOwnProperty("dataConditions")) {
                    if (!$util.isObject(message.dataConditions))
                        return "dataConditions: object expected";
                    var key = Object.keys(message.dataConditions);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.DBMessaging.Protobuf.EventQuery.ConditionList.verify(message.dataConditions[key[i]]);
                        if (error)
                            return "dataConditions." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EventQuery message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.EventQuery} EventQuery
             */
            EventQuery.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.EventQuery)
                    return object;
                var message = new $root.DBMessaging.Protobuf.EventQuery();
                if (object.timeRangeBegin != null)
                    message.timeRangeBegin = Number(object.timeRangeBegin);
                if (object.timeRangeEnd != null)
                    message.timeRangeEnd = Number(object.timeRangeEnd);
                if (object.codeMask != null)
                    message.codeMask = object.codeMask >>> 0;
                if (object.limit != null)
                    message.limit = object.limit >>> 0;
                if (object.offset != null)
                    message.offset = object.offset >>> 0;
                if (object.flags != null)
                    message.flags = object.flags >>> 0;
                if (object.senderConditions != null) {
                    if (typeof object.senderConditions !== "object")
                        throw TypeError(".DBMessaging.Protobuf.EventQuery.senderConditions: object expected");
                    message.senderConditions = $root.DBMessaging.Protobuf.EventQuery.ConditionList.fromObject(object.senderConditions);
                }
                if (object.dataConditions) {
                    if (typeof object.dataConditions !== "object")
                        throw TypeError(".DBMessaging.Protobuf.EventQuery.dataConditions: object expected");
                    message.dataConditions = {};
                    for (var keys = Object.keys(object.dataConditions), i = 0; i < keys.length; ++i) {
                        if (typeof object.dataConditions[keys[i]] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.EventQuery.dataConditions: object expected");
                        message.dataConditions[keys[i]] = $root.DBMessaging.Protobuf.EventQuery.ConditionList.fromObject(object.dataConditions[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EventQuery message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {DBMessaging.Protobuf.EventQuery} message EventQuery
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventQuery.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.dataConditions = {};
                if (options.defaults) {
                    object.timeRangeBegin = 0;
                    object.timeRangeEnd = 0;
                    object.codeMask = 0;
                    object.limit = 0;
                    object.offset = 0;
                    object.flags = 0;
                    object.senderConditions = null;
                }
                if (message.timeRangeBegin != null && message.hasOwnProperty("timeRangeBegin"))
                    object.timeRangeBegin = options.json && !isFinite(message.timeRangeBegin) ? String(message.timeRangeBegin) : message.timeRangeBegin;
                if (message.timeRangeEnd != null && message.hasOwnProperty("timeRangeEnd"))
                    object.timeRangeEnd = options.json && !isFinite(message.timeRangeEnd) ? String(message.timeRangeEnd) : message.timeRangeEnd;
                if (message.codeMask != null && message.hasOwnProperty("codeMask"))
                    object.codeMask = message.codeMask;
                if (message.limit != null && message.hasOwnProperty("limit"))
                    object.limit = message.limit;
                if (message.offset != null && message.hasOwnProperty("offset"))
                    object.offset = message.offset;
                if (message.flags != null && message.hasOwnProperty("flags"))
                    object.flags = message.flags;
                if (message.senderConditions != null && message.hasOwnProperty("senderConditions"))
                    object.senderConditions = $root.DBMessaging.Protobuf.EventQuery.ConditionList.toObject(message.senderConditions, options);
                var keys2;
                if (message.dataConditions && (keys2 = Object.keys(message.dataConditions)).length) {
                    object.dataConditions = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.dataConditions[keys2[j]] = $root.DBMessaging.Protobuf.EventQuery.ConditionList.toObject(message.dataConditions[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this EventQuery to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.EventQuery
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventQuery.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EventQuery
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.EventQuery
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.EventQuery";
            };

            /**
             * MatchType enum.
             * @name DBMessaging.Protobuf.EventQuery.MatchType
             * @enum {number}
             * @property {number} Exact=0 Exact value
             * @property {number} Wildcard=1 Wildcard value
             */
            EventQuery.MatchType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "Exact"] = 0;
                values[valuesById[1] = "Wildcard"] = 1;
                return values;
            })();

            EventQuery.Condition = (function() {

                /**
                 * Properties of a Condition.
                 * @memberof DBMessaging.Protobuf.EventQuery
                 * @interface ICondition
                 * @property {string|null} [value] Condition value
                 * @property {DBMessaging.Protobuf.EventQuery.MatchType|null} [type] Condition type
                 */

                /**
                 * Constructs a new Condition.
                 * @memberof DBMessaging.Protobuf.EventQuery
                 * @classdesc Represents a Condition.
                 * @implements ICondition
                 * @constructor
                 * @param {DBMessaging.Protobuf.EventQuery.ICondition=} [properties] Properties to set
                 */
                function Condition(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Condition value.
                 * @member {string} value
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @instance
                 */
                Condition.prototype.value = "";

                /**
                 * Condition type.
                 * @member {DBMessaging.Protobuf.EventQuery.MatchType} type
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @instance
                 */
                Condition.prototype.type = 0;

                /**
                 * Creates a new Condition instance using the specified properties.
                 * @function create
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.ICondition=} [properties] Properties to set
                 * @returns {DBMessaging.Protobuf.EventQuery.Condition} Condition instance
                 */
                Condition.create = function create(properties) {
                    return new Condition(properties);
                };

                /**
                 * Encodes the specified Condition message. Does not implicitly {@link DBMessaging.Protobuf.EventQuery.Condition.verify|verify} messages.
                 * @function encode
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.ICondition} message Condition message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Condition.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    return writer;
                };

                /**
                 * Encodes the specified Condition message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.EventQuery.Condition.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.ICondition} message Condition message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Condition.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Condition message from the specified reader or buffer.
                 * @function decode
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {DBMessaging.Protobuf.EventQuery.Condition} Condition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Condition.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.EventQuery.Condition();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.string();
                                break;
                            }
                        case 2: {
                                message.type = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Condition message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {DBMessaging.Protobuf.EventQuery.Condition} Condition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Condition.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Condition message.
                 * @function verify
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Condition.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a Condition message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {DBMessaging.Protobuf.EventQuery.Condition} Condition
                 */
                Condition.fromObject = function fromObject(object) {
                    if (object instanceof $root.DBMessaging.Protobuf.EventQuery.Condition)
                        return object;
                    var message = new $root.DBMessaging.Protobuf.EventQuery.Condition();
                    if (object.value != null)
                        message.value = String(object.value);
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "Exact":
                    case 0:
                        message.type = 0;
                        break;
                    case "Wildcard":
                    case 1:
                        message.type = 1;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Condition message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.Condition} message Condition
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Condition.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.value = "";
                        object.type = options.enums === String ? "Exact" : 0;
                    }
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.DBMessaging.Protobuf.EventQuery.MatchType[message.type] === undefined ? message.type : $root.DBMessaging.Protobuf.EventQuery.MatchType[message.type] : message.type;
                    return object;
                };

                /**
                 * Converts this Condition to JSON.
                 * @function toJSON
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Condition.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Condition
                 * @function getTypeUrl
                 * @memberof DBMessaging.Protobuf.EventQuery.Condition
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Condition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/DBMessaging.Protobuf.EventQuery.Condition";
                };

                return Condition;
            })();

            EventQuery.ConditionList = (function() {

                /**
                 * Properties of a ConditionList.
                 * @memberof DBMessaging.Protobuf.EventQuery
                 * @interface IConditionList
                 * @property {Array.<DBMessaging.Protobuf.EventQuery.ICondition>|null} [conditions] ConditionList conditions
                 */

                /**
                 * Constructs a new ConditionList.
                 * @memberof DBMessaging.Protobuf.EventQuery
                 * @classdesc Represents a ConditionList.
                 * @implements IConditionList
                 * @constructor
                 * @param {DBMessaging.Protobuf.EventQuery.IConditionList=} [properties] Properties to set
                 */
                function ConditionList(properties) {
                    this.conditions = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ConditionList conditions.
                 * @member {Array.<DBMessaging.Protobuf.EventQuery.ICondition>} conditions
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @instance
                 */
                ConditionList.prototype.conditions = $util.emptyArray;

                /**
                 * Creates a new ConditionList instance using the specified properties.
                 * @function create
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.IConditionList=} [properties] Properties to set
                 * @returns {DBMessaging.Protobuf.EventQuery.ConditionList} ConditionList instance
                 */
                ConditionList.create = function create(properties) {
                    return new ConditionList(properties);
                };

                /**
                 * Encodes the specified ConditionList message. Does not implicitly {@link DBMessaging.Protobuf.EventQuery.ConditionList.verify|verify} messages.
                 * @function encode
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.IConditionList} message ConditionList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConditionList.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.conditions != null && message.conditions.length)
                        for (var i = 0; i < message.conditions.length; ++i)
                            $root.DBMessaging.Protobuf.EventQuery.Condition.encode(message.conditions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ConditionList message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.EventQuery.ConditionList.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.IConditionList} message ConditionList message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConditionList.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ConditionList message from the specified reader or buffer.
                 * @function decode
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {DBMessaging.Protobuf.EventQuery.ConditionList} ConditionList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConditionList.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.EventQuery.ConditionList();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.conditions && message.conditions.length))
                                    message.conditions = [];
                                message.conditions.push($root.DBMessaging.Protobuf.EventQuery.Condition.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ConditionList message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {DBMessaging.Protobuf.EventQuery.ConditionList} ConditionList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConditionList.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ConditionList message.
                 * @function verify
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ConditionList.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.conditions != null && message.hasOwnProperty("conditions")) {
                        if (!Array.isArray(message.conditions))
                            return "conditions: array expected";
                        for (var i = 0; i < message.conditions.length; ++i) {
                            var error = $root.DBMessaging.Protobuf.EventQuery.Condition.verify(message.conditions[i]);
                            if (error)
                                return "conditions." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ConditionList message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {DBMessaging.Protobuf.EventQuery.ConditionList} ConditionList
                 */
                ConditionList.fromObject = function fromObject(object) {
                    if (object instanceof $root.DBMessaging.Protobuf.EventQuery.ConditionList)
                        return object;
                    var message = new $root.DBMessaging.Protobuf.EventQuery.ConditionList();
                    if (object.conditions) {
                        if (!Array.isArray(object.conditions))
                            throw TypeError(".DBMessaging.Protobuf.EventQuery.ConditionList.conditions: array expected");
                        message.conditions = [];
                        for (var i = 0; i < object.conditions.length; ++i) {
                            if (typeof object.conditions[i] !== "object")
                                throw TypeError(".DBMessaging.Protobuf.EventQuery.ConditionList.conditions: object expected");
                            message.conditions[i] = $root.DBMessaging.Protobuf.EventQuery.Condition.fromObject(object.conditions[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ConditionList message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {DBMessaging.Protobuf.EventQuery.ConditionList} message ConditionList
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ConditionList.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.conditions = [];
                    if (message.conditions && message.conditions.length) {
                        object.conditions = [];
                        for (var j = 0; j < message.conditions.length; ++j)
                            object.conditions[j] = $root.DBMessaging.Protobuf.EventQuery.Condition.toObject(message.conditions[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ConditionList to JSON.
                 * @function toJSON
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ConditionList.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ConditionList
                 * @function getTypeUrl
                 * @memberof DBMessaging.Protobuf.EventQuery.ConditionList
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ConditionList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/DBMessaging.Protobuf.EventQuery.ConditionList";
                };

                return ConditionList;
            })();

            return EventQuery;
        })();

        Protobuf.EventSenderTagsRequest = (function() {

            /**
             * Properties of an EventSenderTagsRequest.
             * @memberof DBMessaging.Protobuf
             * @interface IEventSenderTagsRequest
             * @property {number|null} [requestId] EventSenderTagsRequest requestId
             */

            /**
             * Constructs a new EventSenderTagsRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents an EventSenderTagsRequest.
             * @implements IEventSenderTagsRequest
             * @constructor
             * @param {DBMessaging.Protobuf.IEventSenderTagsRequest=} [properties] Properties to set
             */
            function EventSenderTagsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EventSenderTagsRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @instance
             */
            EventSenderTagsRequest.prototype.requestId = 0;

            /**
             * Creates a new EventSenderTagsRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {DBMessaging.Protobuf.IEventSenderTagsRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.EventSenderTagsRequest} EventSenderTagsRequest instance
             */
            EventSenderTagsRequest.create = function create(properties) {
                return new EventSenderTagsRequest(properties);
            };

            /**
             * Encodes the specified EventSenderTagsRequest message. Does not implicitly {@link DBMessaging.Protobuf.EventSenderTagsRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {DBMessaging.Protobuf.IEventSenderTagsRequest} message EventSenderTagsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventSenderTagsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                return writer;
            };

            /**
             * Encodes the specified EventSenderTagsRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.EventSenderTagsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {DBMessaging.Protobuf.IEventSenderTagsRequest} message EventSenderTagsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventSenderTagsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EventSenderTagsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.EventSenderTagsRequest} EventSenderTagsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventSenderTagsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.EventSenderTagsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EventSenderTagsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.EventSenderTagsRequest} EventSenderTagsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventSenderTagsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EventSenderTagsRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventSenderTagsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                return null;
            };

            /**
             * Creates an EventSenderTagsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.EventSenderTagsRequest} EventSenderTagsRequest
             */
            EventSenderTagsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.EventSenderTagsRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.EventSenderTagsRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an EventSenderTagsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {DBMessaging.Protobuf.EventSenderTagsRequest} message EventSenderTagsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventSenderTagsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                return object;
            };

            /**
             * Converts this EventSenderTagsRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventSenderTagsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EventSenderTagsRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.EventSenderTagsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventSenderTagsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.EventSenderTagsRequest";
            };

            return EventSenderTagsRequest;
        })();

        Protobuf.EventSenderTagsResponse = (function() {

            /**
             * Properties of an EventSenderTagsResponse.
             * @memberof DBMessaging.Protobuf
             * @interface IEventSenderTagsResponse
             * @property {number|null} [requestId] EventSenderTagsResponse requestId
             * @property {Object.<string,DBMessaging.Protobuf.ITagMap>|null} [senderTags] EventSenderTagsResponse senderTags
             */

            /**
             * Constructs a new EventSenderTagsResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents an EventSenderTagsResponse.
             * @implements IEventSenderTagsResponse
             * @constructor
             * @param {DBMessaging.Protobuf.IEventSenderTagsResponse=} [properties] Properties to set
             */
            function EventSenderTagsResponse(properties) {
                this.senderTags = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EventSenderTagsResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @instance
             */
            EventSenderTagsResponse.prototype.requestId = 0;

            /**
             * EventSenderTagsResponse senderTags.
             * @member {Object.<string,DBMessaging.Protobuf.ITagMap>} senderTags
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @instance
             */
            EventSenderTagsResponse.prototype.senderTags = $util.emptyObject;

            /**
             * Creates a new EventSenderTagsResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {DBMessaging.Protobuf.IEventSenderTagsResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.EventSenderTagsResponse} EventSenderTagsResponse instance
             */
            EventSenderTagsResponse.create = function create(properties) {
                return new EventSenderTagsResponse(properties);
            };

            /**
             * Encodes the specified EventSenderTagsResponse message. Does not implicitly {@link DBMessaging.Protobuf.EventSenderTagsResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {DBMessaging.Protobuf.IEventSenderTagsResponse} message EventSenderTagsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventSenderTagsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.senderTags != null && Object.hasOwnProperty.call(message, "senderTags"))
                    for (var keys = Object.keys(message.senderTags), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.DBMessaging.Protobuf.TagMap.encode(message.senderTags[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified EventSenderTagsResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.EventSenderTagsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {DBMessaging.Protobuf.IEventSenderTagsResponse} message EventSenderTagsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventSenderTagsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EventSenderTagsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.EventSenderTagsResponse} EventSenderTagsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventSenderTagsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.EventSenderTagsResponse(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            if (message.senderTags === $util.emptyObject)
                                message.senderTags = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.DBMessaging.Protobuf.TagMap.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.senderTags[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EventSenderTagsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.EventSenderTagsResponse} EventSenderTagsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventSenderTagsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EventSenderTagsResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventSenderTagsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.senderTags != null && message.hasOwnProperty("senderTags")) {
                    if (!$util.isObject(message.senderTags))
                        return "senderTags: object expected";
                    var key = Object.keys(message.senderTags);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.DBMessaging.Protobuf.TagMap.verify(message.senderTags[key[i]]);
                        if (error)
                            return "senderTags." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EventSenderTagsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.EventSenderTagsResponse} EventSenderTagsResponse
             */
            EventSenderTagsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.EventSenderTagsResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.EventSenderTagsResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.senderTags) {
                    if (typeof object.senderTags !== "object")
                        throw TypeError(".DBMessaging.Protobuf.EventSenderTagsResponse.senderTags: object expected");
                    message.senderTags = {};
                    for (var keys = Object.keys(object.senderTags), i = 0; i < keys.length; ++i) {
                        if (typeof object.senderTags[keys[i]] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.EventSenderTagsResponse.senderTags: object expected");
                        message.senderTags[keys[i]] = $root.DBMessaging.Protobuf.TagMap.fromObject(object.senderTags[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EventSenderTagsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {DBMessaging.Protobuf.EventSenderTagsResponse} message EventSenderTagsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventSenderTagsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.senderTags = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                var keys2;
                if (message.senderTags && (keys2 = Object.keys(message.senderTags)).length) {
                    object.senderTags = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.senderTags[keys2[j]] = $root.DBMessaging.Protobuf.TagMap.toObject(message.senderTags[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this EventSenderTagsResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventSenderTagsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EventSenderTagsResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.EventSenderTagsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventSenderTagsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.EventSenderTagsResponse";
            };

            return EventSenderTagsResponse;
        })();

        Protobuf.CountEventsRequest = (function() {

            /**
             * Properties of a CountEventsRequest.
             * @memberof DBMessaging.Protobuf
             * @interface ICountEventsRequest
             * @property {number|null} [requestId] CountEventsRequest requestId
             * @property {DBMessaging.Protobuf.IEventQuery|null} [query] CountEventsRequest query
             */

            /**
             * Constructs a new CountEventsRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a CountEventsRequest.
             * @implements ICountEventsRequest
             * @constructor
             * @param {DBMessaging.Protobuf.ICountEventsRequest=} [properties] Properties to set
             */
            function CountEventsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CountEventsRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @instance
             */
            CountEventsRequest.prototype.requestId = 0;

            /**
             * CountEventsRequest query.
             * @member {DBMessaging.Protobuf.IEventQuery|null|undefined} query
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @instance
             */
            CountEventsRequest.prototype.query = null;

            /**
             * Creates a new CountEventsRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {DBMessaging.Protobuf.ICountEventsRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.CountEventsRequest} CountEventsRequest instance
             */
            CountEventsRequest.create = function create(properties) {
                return new CountEventsRequest(properties);
            };

            /**
             * Encodes the specified CountEventsRequest message. Does not implicitly {@link DBMessaging.Protobuf.CountEventsRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {DBMessaging.Protobuf.ICountEventsRequest} message CountEventsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CountEventsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                    $root.DBMessaging.Protobuf.EventQuery.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CountEventsRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.CountEventsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {DBMessaging.Protobuf.ICountEventsRequest} message CountEventsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CountEventsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CountEventsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.CountEventsRequest} CountEventsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CountEventsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.CountEventsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.query = $root.DBMessaging.Protobuf.EventQuery.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CountEventsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.CountEventsRequest} CountEventsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CountEventsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CountEventsRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CountEventsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.query != null && message.hasOwnProperty("query")) {
                    var error = $root.DBMessaging.Protobuf.EventQuery.verify(message.query);
                    if (error)
                        return "query." + error;
                }
                return null;
            };

            /**
             * Creates a CountEventsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.CountEventsRequest} CountEventsRequest
             */
            CountEventsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.CountEventsRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.CountEventsRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.query != null) {
                    if (typeof object.query !== "object")
                        throw TypeError(".DBMessaging.Protobuf.CountEventsRequest.query: object expected");
                    message.query = $root.DBMessaging.Protobuf.EventQuery.fromObject(object.query);
                }
                return message;
            };

            /**
             * Creates a plain object from a CountEventsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {DBMessaging.Protobuf.CountEventsRequest} message CountEventsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CountEventsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = 0;
                    object.query = null;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = $root.DBMessaging.Protobuf.EventQuery.toObject(message.query, options);
                return object;
            };

            /**
             * Converts this CountEventsRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CountEventsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CountEventsRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.CountEventsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CountEventsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.CountEventsRequest";
            };

            return CountEventsRequest;
        })();

        Protobuf.CountEventsResponse = (function() {

            /**
             * Properties of a CountEventsResponse.
             * @memberof DBMessaging.Protobuf
             * @interface ICountEventsResponse
             * @property {number|null} [requestId] CountEventsResponse requestId
             * @property {number|Long|null} [count] CountEventsResponse count
             */

            /**
             * Constructs a new CountEventsResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a CountEventsResponse.
             * @implements ICountEventsResponse
             * @constructor
             * @param {DBMessaging.Protobuf.ICountEventsResponse=} [properties] Properties to set
             */
            function CountEventsResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CountEventsResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @instance
             */
            CountEventsResponse.prototype.requestId = 0;

            /**
             * CountEventsResponse count.
             * @member {number|Long} count
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @instance
             */
            CountEventsResponse.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new CountEventsResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {DBMessaging.Protobuf.ICountEventsResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.CountEventsResponse} CountEventsResponse instance
             */
            CountEventsResponse.create = function create(properties) {
                return new CountEventsResponse(properties);
            };

            /**
             * Encodes the specified CountEventsResponse message. Does not implicitly {@link DBMessaging.Protobuf.CountEventsResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {DBMessaging.Protobuf.ICountEventsResponse} message CountEventsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CountEventsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
                return writer;
            };

            /**
             * Encodes the specified CountEventsResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.CountEventsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {DBMessaging.Protobuf.ICountEventsResponse} message CountEventsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CountEventsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CountEventsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.CountEventsResponse} CountEventsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CountEventsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.CountEventsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.count = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CountEventsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.CountEventsResponse} CountEventsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CountEventsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CountEventsResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CountEventsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                        return "count: integer|Long expected";
                return null;
            };

            /**
             * Creates a CountEventsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.CountEventsResponse} CountEventsResponse
             */
            CountEventsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.CountEventsResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.CountEventsResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.count != null)
                    if ($util.Long)
                        (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                    else if (typeof object.count === "string")
                        message.count = parseInt(object.count, 10);
                    else if (typeof object.count === "number")
                        message.count = object.count;
                    else if (typeof object.count === "object")
                        message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a CountEventsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {DBMessaging.Protobuf.CountEventsResponse} message CountEventsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CountEventsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.count = options.longs === String ? "0" : 0;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.count != null && message.hasOwnProperty("count"))
                    if (typeof message.count === "number")
                        object.count = options.longs === String ? String(message.count) : message.count;
                    else
                        object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
                return object;
            };

            /**
             * Converts this CountEventsResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CountEventsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CountEventsResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.CountEventsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CountEventsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.CountEventsResponse";
            };

            return CountEventsResponse;
        })();

        Protobuf.EventsRequest = (function() {

            /**
             * Properties of an EventsRequest.
             * @memberof DBMessaging.Protobuf
             * @interface IEventsRequest
             * @property {number|null} [requestId] EventsRequest requestId
             * @property {DBMessaging.Protobuf.IEventQuery|null} [query] EventsRequest query
             */

            /**
             * Constructs a new EventsRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents an EventsRequest.
             * @implements IEventsRequest
             * @constructor
             * @param {DBMessaging.Protobuf.IEventsRequest=} [properties] Properties to set
             */
            function EventsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EventsRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @instance
             */
            EventsRequest.prototype.requestId = 0;

            /**
             * EventsRequest query.
             * @member {DBMessaging.Protobuf.IEventQuery|null|undefined} query
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @instance
             */
            EventsRequest.prototype.query = null;

            /**
             * Creates a new EventsRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {DBMessaging.Protobuf.IEventsRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.EventsRequest} EventsRequest instance
             */
            EventsRequest.create = function create(properties) {
                return new EventsRequest(properties);
            };

            /**
             * Encodes the specified EventsRequest message. Does not implicitly {@link DBMessaging.Protobuf.EventsRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {DBMessaging.Protobuf.IEventsRequest} message EventsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                    $root.DBMessaging.Protobuf.EventQuery.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EventsRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.EventsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {DBMessaging.Protobuf.IEventsRequest} message EventsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EventsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.EventsRequest} EventsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.EventsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.query = $root.DBMessaging.Protobuf.EventQuery.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EventsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.EventsRequest} EventsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EventsRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.query != null && message.hasOwnProperty("query")) {
                    var error = $root.DBMessaging.Protobuf.EventQuery.verify(message.query);
                    if (error)
                        return "query." + error;
                }
                return null;
            };

            /**
             * Creates an EventsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.EventsRequest} EventsRequest
             */
            EventsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.EventsRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.EventsRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.query != null) {
                    if (typeof object.query !== "object")
                        throw TypeError(".DBMessaging.Protobuf.EventsRequest.query: object expected");
                    message.query = $root.DBMessaging.Protobuf.EventQuery.fromObject(object.query);
                }
                return message;
            };

            /**
             * Creates a plain object from an EventsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {DBMessaging.Protobuf.EventsRequest} message EventsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = 0;
                    object.query = null;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.query != null && message.hasOwnProperty("query"))
                    object.query = $root.DBMessaging.Protobuf.EventQuery.toObject(message.query, options);
                return object;
            };

            /**
             * Converts this EventsRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EventsRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.EventsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.EventsRequest";
            };

            return EventsRequest;
        })();

        Protobuf.EventsResponse = (function() {

            /**
             * Properties of an EventsResponse.
             * @memberof DBMessaging.Protobuf
             * @interface IEventsResponse
             * @property {number|null} [requestId] EventsResponse requestId
             * @property {Array.<DBMessaging.Protobuf.IEvent>|null} [events] EventsResponse events
             */

            /**
             * Constructs a new EventsResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents an EventsResponse.
             * @implements IEventsResponse
             * @constructor
             * @param {DBMessaging.Protobuf.IEventsResponse=} [properties] Properties to set
             */
            function EventsResponse(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * EventsResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @instance
             */
            EventsResponse.prototype.requestId = 0;

            /**
             * EventsResponse events.
             * @member {Array.<DBMessaging.Protobuf.IEvent>} events
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @instance
             */
            EventsResponse.prototype.events = $util.emptyArray;

            /**
             * Creates a new EventsResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {DBMessaging.Protobuf.IEventsResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.EventsResponse} EventsResponse instance
             */
            EventsResponse.create = function create(properties) {
                return new EventsResponse(properties);
            };

            /**
             * Encodes the specified EventsResponse message. Does not implicitly {@link DBMessaging.Protobuf.EventsResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {DBMessaging.Protobuf.IEventsResponse} message EventsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.DBMessaging.Protobuf.Event.encode(message.events[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified EventsResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.EventsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {DBMessaging.Protobuf.IEventsResponse} message EventsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            EventsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an EventsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.EventsResponse} EventsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.EventsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            if (!(message.events && message.events.length))
                                message.events = [];
                            message.events.push($root.DBMessaging.Protobuf.Event.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an EventsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.EventsResponse} EventsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EventsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an EventsResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            EventsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.DBMessaging.Protobuf.Event.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an EventsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.EventsResponse} EventsResponse
             */
            EventsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.EventsResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.EventsResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".DBMessaging.Protobuf.EventsResponse.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".DBMessaging.Protobuf.EventsResponse.events: object expected");
                        message.events[i] = $root.DBMessaging.Protobuf.Event.fromObject(object.events[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an EventsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {DBMessaging.Protobuf.EventsResponse} message EventsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            EventsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.events = [];
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.DBMessaging.Protobuf.Event.toObject(message.events[j], options);
                }
                return object;
            };

            /**
             * Converts this EventsResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            EventsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for EventsResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.EventsResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.EventsResponse";
            };

            return EventsResponse;
        })();

        Protobuf.VersionRequest = (function() {

            /**
             * Properties of a VersionRequest.
             * @memberof DBMessaging.Protobuf
             * @interface IVersionRequest
             * @property {number|null} [requestId] VersionRequest requestId
             */

            /**
             * Constructs a new VersionRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a VersionRequest.
             * @implements IVersionRequest
             * @constructor
             * @param {DBMessaging.Protobuf.IVersionRequest=} [properties] Properties to set
             */
            function VersionRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VersionRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @instance
             */
            VersionRequest.prototype.requestId = 0;

            /**
             * Creates a new VersionRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {DBMessaging.Protobuf.IVersionRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.VersionRequest} VersionRequest instance
             */
            VersionRequest.create = function create(properties) {
                return new VersionRequest(properties);
            };

            /**
             * Encodes the specified VersionRequest message. Does not implicitly {@link DBMessaging.Protobuf.VersionRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {DBMessaging.Protobuf.IVersionRequest} message VersionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                return writer;
            };

            /**
             * Encodes the specified VersionRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.VersionRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {DBMessaging.Protobuf.IVersionRequest} message VersionRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VersionRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.VersionRequest} VersionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.VersionRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VersionRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.VersionRequest} VersionRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VersionRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VersionRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                return null;
            };

            /**
             * Creates a VersionRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.VersionRequest} VersionRequest
             */
            VersionRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.VersionRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.VersionRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a VersionRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {DBMessaging.Protobuf.VersionRequest} message VersionRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VersionRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                return object;
            };

            /**
             * Converts this VersionRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VersionRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VersionRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.VersionRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VersionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.VersionRequest";
            };

            return VersionRequest;
        })();

        Protobuf.VersionResponse = (function() {

            /**
             * Properties of a VersionResponse.
             * @memberof DBMessaging.Protobuf
             * @interface IVersionResponse
             * @property {number|null} [requestId] VersionResponse requestId
             * @property {string|null} [version] VersionResponse version
             */

            /**
             * Constructs a new VersionResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a VersionResponse.
             * @implements IVersionResponse
             * @constructor
             * @param {DBMessaging.Protobuf.IVersionResponse=} [properties] Properties to set
             */
            function VersionResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VersionResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @instance
             */
            VersionResponse.prototype.requestId = 0;

            /**
             * VersionResponse version.
             * @member {string} version
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @instance
             */
            VersionResponse.prototype.version = "";

            /**
             * Creates a new VersionResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {DBMessaging.Protobuf.IVersionResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.VersionResponse} VersionResponse instance
             */
            VersionResponse.create = function create(properties) {
                return new VersionResponse(properties);
            };

            /**
             * Encodes the specified VersionResponse message. Does not implicitly {@link DBMessaging.Protobuf.VersionResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {DBMessaging.Protobuf.IVersionResponse} message VersionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                return writer;
            };

            /**
             * Encodes the specified VersionResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.VersionResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {DBMessaging.Protobuf.IVersionResponse} message VersionResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VersionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VersionResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.VersionResponse} VersionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.VersionResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.version = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VersionResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.VersionResponse} VersionResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VersionResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VersionResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VersionResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                return null;
            };

            /**
             * Creates a VersionResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.VersionResponse} VersionResponse
             */
            VersionResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.VersionResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.VersionResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.version != null)
                    message.version = String(object.version);
                return message;
            };

            /**
             * Creates a plain object from a VersionResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {DBMessaging.Protobuf.VersionResponse} message VersionResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VersionResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = 0;
                    object.version = "";
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                return object;
            };

            /**
             * Converts this VersionResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VersionResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VersionResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.VersionResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VersionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.VersionResponse";
            };

            return VersionResponse;
        })();

        Protobuf.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof DBMessaging.Protobuf
             * @interface IError
             * @property {number|null} [requestId] Error requestId
             * @property {string|null} [errorMessage] Error errorMessage
             * @property {number|null} [errorCode] Error errorCode
             */

            /**
             * Constructs a new Error.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {DBMessaging.Protobuf.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.Error
             * @instance
             */
            Error.prototype.requestId = 0;

            /**
             * Error errorMessage.
             * @member {string} errorMessage
             * @memberof DBMessaging.Protobuf.Error
             * @instance
             */
            Error.prototype.errorMessage = "";

            /**
             * Error errorCode.
             * @member {number} errorCode
             * @memberof DBMessaging.Protobuf.Error
             * @instance
             */
            Error.prototype.errorCode = 0;

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {DBMessaging.Protobuf.IError=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link DBMessaging.Protobuf.Error.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {DBMessaging.Protobuf.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
                if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.errorCode);
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {DBMessaging.Protobuf.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.errorMessage = reader.string();
                            break;
                        }
                    case 3: {
                            message.errorCode = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                    if (!$util.isString(message.errorMessage))
                        return "errorMessage: string expected";
                if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                    if (!$util.isInteger(message.errorCode))
                        return "errorCode: integer expected";
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.Error)
                    return object;
                var message = new $root.DBMessaging.Protobuf.Error();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.errorMessage != null)
                    message.errorMessage = String(object.errorMessage);
                if (object.errorCode != null)
                    message.errorCode = object.errorCode | 0;
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {DBMessaging.Protobuf.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = 0;
                    object.errorMessage = "";
                    object.errorCode = 0;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                    object.errorMessage = message.errorMessage;
                if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                    object.errorCode = message.errorCode;
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Error
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.Error
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.Error";
            };

            return Error;
        })();

        Protobuf.TimeRequest = (function() {

            /**
             * Properties of a TimeRequest.
             * @memberof DBMessaging.Protobuf
             * @interface ITimeRequest
             * @property {number|null} [requestId] TimeRequest requestId
             */

            /**
             * Constructs a new TimeRequest.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a TimeRequest.
             * @implements ITimeRequest
             * @constructor
             * @param {DBMessaging.Protobuf.ITimeRequest=} [properties] Properties to set
             */
            function TimeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TimeRequest requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @instance
             */
            TimeRequest.prototype.requestId = 0;

            /**
             * Creates a new TimeRequest instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {DBMessaging.Protobuf.ITimeRequest=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.TimeRequest} TimeRequest instance
             */
            TimeRequest.create = function create(properties) {
                return new TimeRequest(properties);
            };

            /**
             * Encodes the specified TimeRequest message. Does not implicitly {@link DBMessaging.Protobuf.TimeRequest.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {DBMessaging.Protobuf.ITimeRequest} message TimeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                return writer;
            };

            /**
             * Encodes the specified TimeRequest message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.TimeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {DBMessaging.Protobuf.ITimeRequest} message TimeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TimeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.TimeRequest} TimeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.TimeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TimeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.TimeRequest} TimeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TimeRequest message.
             * @function verify
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TimeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                return null;
            };

            /**
             * Creates a TimeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.TimeRequest} TimeRequest
             */
            TimeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.TimeRequest)
                    return object;
                var message = new $root.DBMessaging.Protobuf.TimeRequest();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a TimeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {DBMessaging.Protobuf.TimeRequest} message TimeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TimeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.requestId = 0;
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                return object;
            };

            /**
             * Converts this TimeRequest to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TimeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TimeRequest
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.TimeRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TimeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.TimeRequest";
            };

            return TimeRequest;
        })();

        Protobuf.TimeResponse = (function() {

            /**
             * Properties of a TimeResponse.
             * @memberof DBMessaging.Protobuf
             * @interface ITimeResponse
             * @property {number|null} [requestId] TimeResponse requestId
             * @property {number|Long|null} [timestamp] TimeResponse timestamp
             */

            /**
             * Constructs a new TimeResponse.
             * @memberof DBMessaging.Protobuf
             * @classdesc Represents a TimeResponse.
             * @implements ITimeResponse
             * @constructor
             * @param {DBMessaging.Protobuf.ITimeResponse=} [properties] Properties to set
             */
            function TimeResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TimeResponse requestId.
             * @member {number} requestId
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @instance
             */
            TimeResponse.prototype.requestId = 0;

            /**
             * TimeResponse timestamp.
             * @member {number|Long} timestamp
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @instance
             */
            TimeResponse.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new TimeResponse instance using the specified properties.
             * @function create
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {DBMessaging.Protobuf.ITimeResponse=} [properties] Properties to set
             * @returns {DBMessaging.Protobuf.TimeResponse} TimeResponse instance
             */
            TimeResponse.create = function create(properties) {
                return new TimeResponse(properties);
            };

            /**
             * Encodes the specified TimeResponse message. Does not implicitly {@link DBMessaging.Protobuf.TimeResponse.verify|verify} messages.
             * @function encode
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {DBMessaging.Protobuf.ITimeResponse} message TimeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified TimeResponse message, length delimited. Does not implicitly {@link DBMessaging.Protobuf.TimeResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {DBMessaging.Protobuf.ITimeResponse} message TimeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TimeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TimeResponse message from the specified reader or buffer.
             * @function decode
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DBMessaging.Protobuf.TimeResponse} TimeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DBMessaging.Protobuf.TimeResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.timestamp = reader.fixed64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TimeResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DBMessaging.Protobuf.TimeResponse} TimeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TimeResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TimeResponse message.
             * @function verify
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TimeResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isInteger(message.requestId))
                        return "requestId: integer expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a TimeResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DBMessaging.Protobuf.TimeResponse} TimeResponse
             */
            TimeResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.DBMessaging.Protobuf.TimeResponse)
                    return object;
                var message = new $root.DBMessaging.Protobuf.TimeResponse();
                if (object.requestId != null)
                    message.requestId = object.requestId >>> 0;
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a TimeResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {DBMessaging.Protobuf.TimeResponse} message TimeResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TimeResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.requestId = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                return object;
            };

            /**
             * Converts this TimeResponse to JSON.
             * @function toJSON
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TimeResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TimeResponse
             * @function getTypeUrl
             * @memberof DBMessaging.Protobuf.TimeResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TimeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/DBMessaging.Protobuf.TimeResponse";
            };

            return TimeResponse;
        })();

        return Protobuf;
    })();

    return DBMessaging;
})();

$root.ICD = (function() {

    /**
     * Namespace ICD.
     * @exports ICD
     * @namespace
     */
    var ICD = {};

    ICD.Protobuf = (function() {

        /**
         * Namespace Protobuf.
         * @memberof ICD
         * @namespace
         */
        var Protobuf = {};

        /**
         * CDP value type identifier.
         * @name ICD.Protobuf.CDPValueType
         * @enum {number}
         * @property {number} eUNDEFINED=0 eUNDEFINED value
         * @property {number} eDOUBLE=1 eDOUBLE value
         * @property {number} eUINT64=2 eUINT64 value
         * @property {number} eINT64=3 eINT64 value
         * @property {number} eFLOAT=4 eFLOAT value
         * @property {number} eUINT=5 eUINT value
         * @property {number} eINT=6 eINT value
         * @property {number} eUSHORT=7 eUSHORT value
         * @property {number} eSHORT=8 eSHORT value
         * @property {number} eUCHAR=9 eUCHAR value
         * @property {number} eCHAR=10 eCHAR value
         * @property {number} eBOOL=11 eBOOL value
         * @property {number} eSTRING=12 eSTRING value
         * @property {number} eUSERTYPE=100 eUSERTYPE value
         */
        Protobuf.CDPValueType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "eUNDEFINED"] = 0;
            values[valuesById[1] = "eDOUBLE"] = 1;
            values[valuesById[2] = "eUINT64"] = 2;
            values[valuesById[3] = "eINT64"] = 3;
            values[valuesById[4] = "eFLOAT"] = 4;
            values[valuesById[5] = "eUINT"] = 5;
            values[valuesById[6] = "eINT"] = 6;
            values[valuesById[7] = "eUSHORT"] = 7;
            values[valuesById[8] = "eSHORT"] = 8;
            values[valuesById[9] = "eUCHAR"] = 9;
            values[valuesById[10] = "eCHAR"] = 10;
            values[valuesById[11] = "eBOOL"] = 11;
            values[valuesById[12] = "eSTRING"] = 12;
            values[valuesById[100] = "eUSERTYPE"] = 100;
            return values;
        })();

        Protobuf.VariantValue = (function() {

            /**
             * Properties of a VariantValue.
             * @memberof ICD.Protobuf
             * @interface IVariantValue
             * @property {number|null} [nodeId] VariantValue nodeId
             * @property {number|null} [dValue] VariantValue dValue
             * @property {number|null} [fValue] VariantValue fValue
             * @property {number|Long|null} [ui64Value] VariantValue ui64Value
             * @property {number|Long|null} [i64Value] VariantValue i64Value
             * @property {number|null} [uiValue] VariantValue uiValue
             * @property {number|null} [iValue] VariantValue iValue
             * @property {number|null} [usValue] VariantValue usValue
             * @property {number|null} [sValue] VariantValue sValue
             * @property {number|null} [ucValue] VariantValue ucValue
             * @property {number|null} [cValue] VariantValue cValue
             * @property {boolean|null} [bValue] VariantValue bValue
             * @property {string|null} [strValue] VariantValue strValue
             * @property {number|null} [timestamp] VariantValue timestamp
             */

            /**
             * Constructs a new VariantValue.
             * @memberof ICD.Protobuf
             * @classdesc Common Variant value type for a remote node.
             * @implements IVariantValue
             * @constructor
             * @param {ICD.Protobuf.IVariantValue=} [properties] Properties to set
             */
            function VariantValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VariantValue nodeId.
             * @member {number} nodeId
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.nodeId = 0;

            /**
             * VariantValue dValue.
             * @member {number} dValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.dValue = 0;

            /**
             * VariantValue fValue.
             * @member {number} fValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.fValue = 0;

            /**
             * VariantValue ui64Value.
             * @member {number|Long} ui64Value
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.ui64Value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * VariantValue i64Value.
             * @member {number|Long} i64Value
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.i64Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * VariantValue uiValue.
             * @member {number} uiValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.uiValue = 0;

            /**
             * VariantValue iValue.
             * @member {number} iValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.iValue = 0;

            /**
             * VariantValue usValue.
             * @member {number} usValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.usValue = 0;

            /**
             * VariantValue sValue.
             * @member {number} sValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.sValue = 0;

            /**
             * VariantValue ucValue.
             * @member {number} ucValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.ucValue = 0;

            /**
             * VariantValue cValue.
             * @member {number} cValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.cValue = 0;

            /**
             * VariantValue bValue.
             * @member {boolean} bValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.bValue = false;

            /**
             * VariantValue strValue.
             * @member {string} strValue
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.strValue = "";

            /**
             * VariantValue timestamp.
             * @member {number} timestamp
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             */
            VariantValue.prototype.timestamp = 0;

            /**
             * Creates a new VariantValue instance using the specified properties.
             * @function create
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {ICD.Protobuf.IVariantValue=} [properties] Properties to set
             * @returns {ICD.Protobuf.VariantValue} VariantValue instance
             */
            VariantValue.create = function create(properties) {
                return new VariantValue(properties);
            };

            /**
             * Encodes the specified VariantValue message. Does not implicitly {@link ICD.Protobuf.VariantValue.verify|verify} messages.
             * @function encode
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {ICD.Protobuf.IVariantValue} message VariantValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VariantValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nodeId);
                if (message.dValue != null && Object.hasOwnProperty.call(message, "dValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.dValue);
                if (message.fValue != null && Object.hasOwnProperty.call(message, "fValue"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.fValue);
                if (message.ui64Value != null && Object.hasOwnProperty.call(message, "ui64Value"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.ui64Value);
                if (message.i64Value != null && Object.hasOwnProperty.call(message, "i64Value"))
                    writer.uint32(/* id 5, wireType 0 =*/40).sint64(message.i64Value);
                if (message.uiValue != null && Object.hasOwnProperty.call(message, "uiValue"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uiValue);
                if (message.iValue != null && Object.hasOwnProperty.call(message, "iValue"))
                    writer.uint32(/* id 7, wireType 0 =*/56).sint32(message.iValue);
                if (message.usValue != null && Object.hasOwnProperty.call(message, "usValue"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.usValue);
                if (message.sValue != null && Object.hasOwnProperty.call(message, "sValue"))
                    writer.uint32(/* id 9, wireType 0 =*/72).sint32(message.sValue);
                if (message.ucValue != null && Object.hasOwnProperty.call(message, "ucValue"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.ucValue);
                if (message.cValue != null && Object.hasOwnProperty.call(message, "cValue"))
                    writer.uint32(/* id 11, wireType 0 =*/88).sint32(message.cValue);
                if (message.bValue != null && Object.hasOwnProperty.call(message, "bValue"))
                    writer.uint32(/* id 12, wireType 0 =*/96).bool(message.bValue);
                if (message.strValue != null && Object.hasOwnProperty.call(message, "strValue"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.strValue);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 14, wireType 1 =*/113).double(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified VariantValue message, length delimited. Does not implicitly {@link ICD.Protobuf.VariantValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {ICD.Protobuf.IVariantValue} message VariantValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VariantValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VariantValue message from the specified reader or buffer.
             * @function decode
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ICD.Protobuf.VariantValue} VariantValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VariantValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ICD.Protobuf.VariantValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.nodeId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.dValue = reader.double();
                            break;
                        }
                    case 3: {
                            message.fValue = reader.float();
                            break;
                        }
                    case 4: {
                            message.ui64Value = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.i64Value = reader.sint64();
                            break;
                        }
                    case 6: {
                            message.uiValue = reader.uint32();
                            break;
                        }
                    case 7: {
                            message.iValue = reader.sint32();
                            break;
                        }
                    case 8: {
                            message.usValue = reader.uint32();
                            break;
                        }
                    case 9: {
                            message.sValue = reader.sint32();
                            break;
                        }
                    case 10: {
                            message.ucValue = reader.uint32();
                            break;
                        }
                    case 11: {
                            message.cValue = reader.sint32();
                            break;
                        }
                    case 12: {
                            message.bValue = reader.bool();
                            break;
                        }
                    case 13: {
                            message.strValue = reader.string();
                            break;
                        }
                    case 14: {
                            message.timestamp = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VariantValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ICD.Protobuf.VariantValue} VariantValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VariantValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VariantValue message.
             * @function verify
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VariantValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                    if (!$util.isInteger(message.nodeId))
                        return "nodeId: integer expected";
                if (message.dValue != null && message.hasOwnProperty("dValue"))
                    if (typeof message.dValue !== "number")
                        return "dValue: number expected";
                if (message.fValue != null && message.hasOwnProperty("fValue"))
                    if (typeof message.fValue !== "number")
                        return "fValue: number expected";
                if (message.ui64Value != null && message.hasOwnProperty("ui64Value"))
                    if (!$util.isInteger(message.ui64Value) && !(message.ui64Value && $util.isInteger(message.ui64Value.low) && $util.isInteger(message.ui64Value.high)))
                        return "ui64Value: integer|Long expected";
                if (message.i64Value != null && message.hasOwnProperty("i64Value"))
                    if (!$util.isInteger(message.i64Value) && !(message.i64Value && $util.isInteger(message.i64Value.low) && $util.isInteger(message.i64Value.high)))
                        return "i64Value: integer|Long expected";
                if (message.uiValue != null && message.hasOwnProperty("uiValue"))
                    if (!$util.isInteger(message.uiValue))
                        return "uiValue: integer expected";
                if (message.iValue != null && message.hasOwnProperty("iValue"))
                    if (!$util.isInteger(message.iValue))
                        return "iValue: integer expected";
                if (message.usValue != null && message.hasOwnProperty("usValue"))
                    if (!$util.isInteger(message.usValue))
                        return "usValue: integer expected";
                if (message.sValue != null && message.hasOwnProperty("sValue"))
                    if (!$util.isInteger(message.sValue))
                        return "sValue: integer expected";
                if (message.ucValue != null && message.hasOwnProperty("ucValue"))
                    if (!$util.isInteger(message.ucValue))
                        return "ucValue: integer expected";
                if (message.cValue != null && message.hasOwnProperty("cValue"))
                    if (!$util.isInteger(message.cValue))
                        return "cValue: integer expected";
                if (message.bValue != null && message.hasOwnProperty("bValue"))
                    if (typeof message.bValue !== "boolean")
                        return "bValue: boolean expected";
                if (message.strValue != null && message.hasOwnProperty("strValue"))
                    if (!$util.isString(message.strValue))
                        return "strValue: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp !== "number")
                        return "timestamp: number expected";
                return null;
            };

            /**
             * Creates a VariantValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ICD.Protobuf.VariantValue} VariantValue
             */
            VariantValue.fromObject = function fromObject(object) {
                if (object instanceof $root.ICD.Protobuf.VariantValue)
                    return object;
                var message = new $root.ICD.Protobuf.VariantValue();
                if (object.nodeId != null)
                    message.nodeId = object.nodeId >>> 0;
                if (object.dValue != null)
                    message.dValue = Number(object.dValue);
                if (object.fValue != null)
                    message.fValue = Number(object.fValue);
                if (object.ui64Value != null)
                    if ($util.Long)
                        (message.ui64Value = $util.Long.fromValue(object.ui64Value)).unsigned = true;
                    else if (typeof object.ui64Value === "string")
                        message.ui64Value = parseInt(object.ui64Value, 10);
                    else if (typeof object.ui64Value === "number")
                        message.ui64Value = object.ui64Value;
                    else if (typeof object.ui64Value === "object")
                        message.ui64Value = new $util.LongBits(object.ui64Value.low >>> 0, object.ui64Value.high >>> 0).toNumber(true);
                if (object.i64Value != null)
                    if ($util.Long)
                        (message.i64Value = $util.Long.fromValue(object.i64Value)).unsigned = false;
                    else if (typeof object.i64Value === "string")
                        message.i64Value = parseInt(object.i64Value, 10);
                    else if (typeof object.i64Value === "number")
                        message.i64Value = object.i64Value;
                    else if (typeof object.i64Value === "object")
                        message.i64Value = new $util.LongBits(object.i64Value.low >>> 0, object.i64Value.high >>> 0).toNumber();
                if (object.uiValue != null)
                    message.uiValue = object.uiValue >>> 0;
                if (object.iValue != null)
                    message.iValue = object.iValue | 0;
                if (object.usValue != null)
                    message.usValue = object.usValue >>> 0;
                if (object.sValue != null)
                    message.sValue = object.sValue | 0;
                if (object.ucValue != null)
                    message.ucValue = object.ucValue >>> 0;
                if (object.cValue != null)
                    message.cValue = object.cValue | 0;
                if (object.bValue != null)
                    message.bValue = Boolean(object.bValue);
                if (object.strValue != null)
                    message.strValue = String(object.strValue);
                if (object.timestamp != null)
                    message.timestamp = Number(object.timestamp);
                return message;
            };

            /**
             * Creates a plain object from a VariantValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {ICD.Protobuf.VariantValue} message VariantValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VariantValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.nodeId = 0;
                    object.dValue = 0;
                    object.fValue = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.ui64Value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ui64Value = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.i64Value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.i64Value = options.longs === String ? "0" : 0;
                    object.uiValue = 0;
                    object.iValue = 0;
                    object.usValue = 0;
                    object.sValue = 0;
                    object.ucValue = 0;
                    object.cValue = 0;
                    object.bValue = false;
                    object.strValue = "";
                    object.timestamp = 0;
                }
                if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                    object.nodeId = message.nodeId;
                if (message.dValue != null && message.hasOwnProperty("dValue"))
                    object.dValue = options.json && !isFinite(message.dValue) ? String(message.dValue) : message.dValue;
                if (message.fValue != null && message.hasOwnProperty("fValue"))
                    object.fValue = options.json && !isFinite(message.fValue) ? String(message.fValue) : message.fValue;
                if (message.ui64Value != null && message.hasOwnProperty("ui64Value"))
                    if (typeof message.ui64Value === "number")
                        object.ui64Value = options.longs === String ? String(message.ui64Value) : message.ui64Value;
                    else
                        object.ui64Value = options.longs === String ? $util.Long.prototype.toString.call(message.ui64Value) : options.longs === Number ? new $util.LongBits(message.ui64Value.low >>> 0, message.ui64Value.high >>> 0).toNumber(true) : message.ui64Value;
                if (message.i64Value != null && message.hasOwnProperty("i64Value"))
                    if (typeof message.i64Value === "number")
                        object.i64Value = options.longs === String ? String(message.i64Value) : message.i64Value;
                    else
                        object.i64Value = options.longs === String ? $util.Long.prototype.toString.call(message.i64Value) : options.longs === Number ? new $util.LongBits(message.i64Value.low >>> 0, message.i64Value.high >>> 0).toNumber() : message.i64Value;
                if (message.uiValue != null && message.hasOwnProperty("uiValue"))
                    object.uiValue = message.uiValue;
                if (message.iValue != null && message.hasOwnProperty("iValue"))
                    object.iValue = message.iValue;
                if (message.usValue != null && message.hasOwnProperty("usValue"))
                    object.usValue = message.usValue;
                if (message.sValue != null && message.hasOwnProperty("sValue"))
                    object.sValue = message.sValue;
                if (message.ucValue != null && message.hasOwnProperty("ucValue"))
                    object.ucValue = message.ucValue;
                if (message.cValue != null && message.hasOwnProperty("cValue"))
                    object.cValue = message.cValue;
                if (message.bValue != null && message.hasOwnProperty("bValue"))
                    object.bValue = message.bValue;
                if (message.strValue != null && message.hasOwnProperty("strValue"))
                    object.strValue = message.strValue;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = options.json && !isFinite(message.timestamp) ? String(message.timestamp) : message.timestamp;
                return object;
            };

            /**
             * Converts this VariantValue to JSON.
             * @function toJSON
             * @memberof ICD.Protobuf.VariantValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VariantValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VariantValue
             * @function getTypeUrl
             * @memberof ICD.Protobuf.VariantValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VariantValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ICD.Protobuf.VariantValue";
            };

            return VariantValue;
        })();

        return Protobuf;
    })();

    return ICD;
})();

module.exports = $root;
