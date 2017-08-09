webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ElementService = (function () {
    function ElementService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.displayNoElements = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.elementToEditClick = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.cancelEdit = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    ElementService.prototype.cancelEditing = function () {
        this.cancelEdit.next();
    };
    ElementService.prototype.cancelEditingSubscription = function () {
        return this.cancelEdit.asObservable();
    };
    ElementService.prototype.elementClicked = function (element) {
        this.subject.next(element);
    };
    ElementService.prototype.getClickedElement = function () {
        return this.subject.asObservable();
    };
    ElementService.prototype.elementToEditClicked = function (show) {
        this.elementToEditClick.next(show);
    };
    ElementService.prototype.getElementToEditClick = function () {
        return this.elementToEditClick.asObservable();
    };
    ElementService.prototype.getElements = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["a" /* MAINELEMENTS */]);
    };
    ElementService.prototype.getElement = function (id) {
        return this.getElements()
            .then(function (elements) { return elements.find(function (element) { return element.id === id; }); });
    };
    ElementService.prototype.getRangeData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* rangeData */]);
    };
    ElementService.prototype.displayNoMainEl = function (data) {
        this.displayNoElements.next(data);
    };
    ElementService.prototype.displayNoMainElSubscription = function () {
        return this.displayNoElements.asObservable();
    };
    return ElementService;
}());
ElementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], ElementService);

//# sourceMappingURL=element.service.js.map

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataArrayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataArrayService = (function () {
    function DataArrayService() {
        this.data = [];
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.informTextInpComp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    DataArrayService.prototype.setDataWithoutSubject = function (data) {
        this.data = data;
    };
    DataArrayService.prototype.setData = function (data) {
        this.data = data;
        this.dataSubject.next(data);
    };
    DataArrayService.prototype.subscribeOnDataChange = function () {
        return this.dataSubject.asObservable();
    };
    DataArrayService.prototype.getData = function () {
        return this.data;
    };
    DataArrayService.prototype.informTextInpCompToRecompileDataFromViewData = function (recompile) {
        this.informTextInpComp.next(recompile);
    };
    DataArrayService.prototype.subscribeForRecompileDataFromEdit = function () {
        return this.informTextInpComp.asObservable();
    };
    return DataArrayService;
}());
DataArrayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], DataArrayService);

//# sourceMappingURL=dataArray.service.js.map

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beauty_data_selection_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllElementsPositionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllElementsPositionService = (function () {
    function AllElementsPositionService(selectionService) {
        this.selectionService = selectionService;
        this.elementsPosition = [];
        this.selectedElements = [];
    }
    AllElementsPositionService.prototype.setInputFromKeyboard = function (parent, direction, index) {
        this.inputFromKeyboard = { parent: parent, direction: direction, index: index };
    };
    AllElementsPositionService.prototype.setInputFromKeyboardIndex = function (index) {
        this.inputFromKeyboard.index = index;
    };
    AllElementsPositionService.prototype.getInputFromKeyboard = function () {
        return this.inputFromKeyboard;
    };
    AllElementsPositionService.prototype.findClosestElementToElementPos = function (positionX, positionY) {
        var closestElement = new ClosestElement();
        var closestElPosX = 9999999; // init stub
        var minDistanceY = 9999999; // init stub
        var elements = this.elementsPosition;
        var currElementString = [];
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            var elPosY = element.position.top + element.position.height / 2;
            var distanceY = Math.abs(elPosY - positionY);
            if (minDistanceY > distanceY + 5) {
                minDistanceY = distanceY;
                currElementString = [];
            }
            else if (minDistanceY + 5 < distanceY) {
                break;
            }
            currElementString.push(element);
        }
        for (var _a = 0, currElementString_1 = currElementString; _a < currElementString_1.length; _a++) {
            var element = currElementString_1[_a];
            var elPosRight = element.position.left + element.position.width;
            var distanceFromLeft = Math.abs(element.position.left - positionX);
            var distanceFromRight = Math.abs(elPosRight - positionX);
            var minDistanceX = distanceFromLeft > distanceFromRight ? distanceFromRight : distanceFromLeft;
            if (minDistanceX < Math.abs(closestElPosX)) {
                closestElPosX = minDistanceX;
                closestElement.element = element.element;
                closestElement.direction = element.position.left + 0.7 * element.position.width > positionX ? 'left' : 'right';
            }
        }
        // if (!closestElement.element) {
        //   for (let element of elements) {
        //
        //     let elPosRight = element.position.left + element.position.width;
        //     let distanceFromLeft = Math.abs(element.position.left - positionX);
        //     let distanceFromRight = Math.abs(elPosRight - positionX);
        //     let minDistance = distanceFromLeft > distanceFromRight ? distanceFromRight : distanceFromLeft;
        //
        //     if (minDistance < Math.abs(closestElPos)) {
        //       closestElPos = minDistance;
        //       closestElement.element = element.element;
        //       closestElement.direction = element.position.left + 0.7 * element.position.width > positionX ? 'left' : 'right';
        //     }
        //   }
        // }
        return closestElement;
    };
    AllElementsPositionService.prototype.findDirectParentOfElement = function (globalArray, element) {
        if (globalArray.indexOf(element) !== -1) {
            return globalArray;
        }
        if (this.checkIfArrayOfStrings(globalArray)) {
            return [];
        }
        var tmp = [];
        for (var _i = 0, globalArray_1 = globalArray; _i < globalArray_1.length; _i++) {
            var possibleParent = globalArray_1[_i];
            if (typeof possibleParent === 'string') {
                continue;
            }
            tmp = this.findDirectParentOfElement(possibleParent, element);
            if (tmp.length > 0) {
                return tmp;
            }
        }
        return [];
    };
    AllElementsPositionService.prototype.addElementToElementsPosition = function (element) {
        for (var _i = 0, _a = this.elementsPosition; _i < _a.length; _i++) {
            var elementPosition = _a[_i];
            if (elementPosition.element === element.element) {
                this.elementsPosition.splice(this.elementsPosition.indexOf(elementPosition), 1);
            }
        }
        this.elementsPosition.push(element);
    };
    AllElementsPositionService.prototype.addElementToSelectedElements = function (element) {
        this.selectedElements.push(element);
    };
    AllElementsPositionService.prototype.getElementToSelectedElements = function () {
        return this.selectedElements;
    };
    AllElementsPositionService.prototype.removeSelection = function () {
        this.mouseStartPosition = null;
        this.mouseCurrPosition = null;
        this.selectedElements = [];
        this.selectionService.resetAllVariables();
        this.selectionService.pushHighlightSelection([]);
    };
    AllElementsPositionService.prototype.clearSelectedElements = function () {
        this.selectedElements.length = 0;
    };
    AllElementsPositionService.prototype.deleteElementFromElementsPosition = function (element) {
        var index = this.elementsPosition.indexOf(element);
        this.elementsPosition.splice(index, 1);
    };
    AllElementsPositionService.prototype.getAllElementPosition = function () {
        return this.elementsPosition;
    };
    AllElementsPositionService.prototype.setMouseStart = function (mouseStart) {
        this.mouseStartPosition = mouseStart;
    };
    AllElementsPositionService.prototype.setMouseCurrPosition = function (mouseCurrPos, viewData) {
        this.clearSelectedElements();
        this.mouseCurrPosition = mouseCurrPos;
        var mouseStart = this.getMouseStart();
        if (mouseStart && mouseCurrPos) {
            this.fillSelectedElements(mouseStart, mouseCurrPos, viewData);
        }
    };
    AllElementsPositionService.prototype.getMouseStart = function () {
        return this.mouseStartPosition;
    };
    AllElementsPositionService.prototype.getMouseCurrPosition = function () {
        return this.mouseCurrPosition;
    };
    AllElementsPositionService.prototype.fillSelectedElements = function (start, end, viewData) {
        var allElArray = this.getAllElementPosition();
        var allElArrLength = allElArray.length;
        for (var i = 0; i < allElArrLength; i++) {
            var check = this.checkElementCoordinateInMouseSelection(allElArray[i].position, start, end);
            if (check && this.checkIfAllChildrenAddedToSelected(allElArray[i].element, 0)) {
                this.addElementToSelectedElements(allElArray[i].element);
            }
        }
        // this.whatToHighligh = this.getElementToSelectedElements().slice();
        // // \/ if all children of element is selected, then element selected too -> highlight it;
        // let addHappens = true;
        // while (addHappens) {
        //   addHappens = false;
        //   for (let element of allElArray) {
        //
        //     let check = this.checkElementCoordinateInMouseSelection(element.position, start, end);
        //
        //     if (check) {
        //       let index = this.whatToHighligh.indexOf(element.element);
        //
        //       if (index !== -1) {
        //
        //         continue;
        //
        //       } else {
        //
        //         if (this.checkIfAllChildrenAddedToSelected(element.element, 0)) {
        //           this.whatToHighligh.push(element.element);
        //           addHappens = true;
        //         }
        //
        //       }
        //     }
        //
        //     if (element[0] === 'group') {
        //
        //
        //     }
        //   }
        // }
        if (viewData) {
            this.selectionService.setViewData(viewData);
        }
        var elements = this.getElementToSelectedElements();
        if (elements.length > 0) {
            this.selectionService.setStart(elements[0]);
            this.selectionService.setEnd(elements[elements.length - 1]);
        }
        else {
            this.selectionService.resetAllVariables();
            this.selectionService.pushHighlightSelection([]);
        }
    };
    AllElementsPositionService.prototype.checkElementCoordinateInMouseSelection = function (position, start, end) {
        if ((this.checkMouseFromBottomToTop(position, start, end) || this.checkMouseFromTopToBottom(position, start, end))
            && (this.checkMouseFromLeftToRight(position, start, end) || this.checkMouseFromRightToLeft(position, start, end))) {
            return true;
        }
        return false;
    };
    AllElementsPositionService.prototype.checkMouseFromTopToBottom = function (position, start, end) {
        return (position.top + position.height >= start.top) && (position.top <= end.top);
    };
    AllElementsPositionService.prototype.checkMouseFromBottomToTop = function (position, start, end) {
        return (position.top <= start.top) && (position.top + position.height >= end.top);
    };
    AllElementsPositionService.prototype.checkMouseFromLeftToRight = function (position, start, end) {
        return (position.left + position.width - 4 <= end.left) && (position.left + 4 >= start.left);
    };
    AllElementsPositionService.prototype.checkMouseFromRightToLeft = function (position, start, end) {
        return (position.left >= end.left) && (position.left + position.width - 4 <= start.left);
    };
    AllElementsPositionService.prototype.checkIfAllChildrenAddedToSelected = function (element, iteration) {
        if (this.checkIfArrayOfStrings(element) && iteration === 0) {
            return true;
        }
        var check = true;
        for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
            var child = element_1[_i];
            if (typeof child === 'string') {
                continue;
            }
            if (this.selectedElements.indexOf(child) !== -1) {
                continue;
            }
            if (typeof child[0] === 'string' && this.selectedElements.indexOf(child) === -1) {
                return false;
            }
            if (typeof child[0] !== 'string') {
                check = this.checkIfAllChildrenAddedToSelected(child, ++iteration);
                if (check === false) {
                    return false;
                }
            }
        }
        return check;
    };
    AllElementsPositionService.prototype.checkIfArrayOfStrings = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var datum = array_1[_i];
            if (typeof datum !== 'string') {
                return false;
            }
        }
        return true;
    };
    AllElementsPositionService.prototype.getElementPosition = function (inputFromKeyboard) {
        var positionWithNeighbours;
        if (inputFromKeyboard.index === -1) {
            for (var element = 0; element < this.elementsPosition.length; element++) {
                if (inputFromKeyboard.parent[inputFromKeyboard.index + 1] === this.elementsPosition[element].element) {
                    positionWithNeighbours = {
                        previous: undefined,
                        current: undefined,
                        next: this.elementsPosition[element].position
                    };
                }
            }
        }
        else {
            positionWithNeighbours = {
                previous: undefined,
                current: undefined,
                next: undefined
            };
            for (var element = 0; element < this.elementsPosition.length; element++) {
                if (inputFromKeyboard.parent[inputFromKeyboard.index] === this.elementsPosition[element].element) {
                    positionWithNeighbours.current = this.elementsPosition[element].position;
                }
            }
            if (inputFromKeyboard.parent[inputFromKeyboard.index - 1]) {
                for (var element = 0; element < this.elementsPosition.length; element++) {
                    if (inputFromKeyboard.parent[inputFromKeyboard.index - 1] === this.elementsPosition[element].element) {
                        positionWithNeighbours.previous = this.elementsPosition[element].position;
                    }
                }
            }
            if (inputFromKeyboard.parent[inputFromKeyboard.index + 1]) {
                for (var element = 0; element < this.elementsPosition.length; element++) {
                    if (inputFromKeyboard.parent[inputFromKeyboard.index + 1] === this.elementsPosition[element].element) {
                        positionWithNeighbours.next = this.elementsPosition[element].position;
                    }
                }
            }
        }
        return positionWithNeighbours;
    };
    return AllElementsPositionService;
}());
AllElementsPositionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__beauty_data_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__beauty_data_selection_service__["a" /* SelectionService */]) === "function" && _a || Object])
], AllElementsPositionService);

var ClosestElement = (function () {
    function ClosestElement() {
    }
    return ClosestElement;
}());
var _a;
//# sourceMappingURL=all-elements-position.service.js.map

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeautyDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeautyDataService = (function () {
    function BeautyDataService() {
        this.lookaround = __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["a" /* MAINELEMENTS */][3].data;
        this.anchors = __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["a" /* MAINELEMENTS */][4].data;
        this.or = { symbol: 'or', regExp: '|' };
        this.presets = __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* rangeData */].topLeft;
    }
    BeautyDataService.prototype.compileViewDataFromData = function (data) {
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '(': {
                    if (data[0] === 'range')
                        break;
                    this.checkForGroup(data, i, '(', ')', 'group');
                    break;
                }
                case '[': {
                    this.checkForGroup(data, i, '[', ']', 'range');
                    this.checkForRange(data, i, '[', ']', 'range');
                    break;
                }
                case '{': {
                    if (data[0] === 'range')
                        break;
                    this.checkForQuantifier(data, i, '{', '}', 'quantifier');
                    i--;
                    break;
                }
                case '?': {
                    if (data[0] === 'range')
                        break;
                    data[i - 1].push(['quantifier', '0', '-', '1']);
                    data.splice(i, 1);
                    i--;
                    break;
                }
                case '*': {
                    if (data[0] === 'range')
                        break;
                    data[i - 1].push(['quantifier', '0', '-', '∞']);
                    data.splice(i, 1);
                    i--;
                    break;
                }
                case '+': {
                    if (data[0] === 'range')
                        break;
                    data[i - 1].push(['quantifier', '1', '-', '∞']);
                    data.splice(i, 1);
                    i--;
                    break;
                }
                case this.anchors[0].regExp: {
                    if (data[0] === 'range')
                        break;
                    this.checkSingleSymbol(data, i, this.anchors[0].symbol, 'anchor');
                    break;
                }
                case this.anchors[1].regExp: {
                    if (data[0] === 'range')
                        break;
                    this.checkSingleSymbol(data, i, this.anchors[1].symbol, 'anchorOpposite');
                    break;
                }
                case this.anchors[2].regExp: {
                    if (data[0] === 'range')
                        break;
                    this.checkSingleSymbol(data, i, this.anchors[2].symbol, 'anchor');
                    break;
                }
                case this.anchors[3].regExp: {
                    if (data[0] === 'range')
                        break;
                    this.checkSingleSymbol(data, i, this.anchors[3].symbol, 'anchor');
                    break;
                }
                case this.or.regExp: {
                    if (data[0] === 'range')
                        break;
                    this.checkSingleSymbol(data, i, this.or.symbol, 'or');
                    break;
                }
                default: {
                    if (typeof data[i] === 'string' &&
                        data[0] !== 'range' &&
                        (data[i].length === 1 || (data[i].length === 2 && data[i][0] === '\\')) &&
                        data[i - 1] !== 'quantifier') {
                        data.splice(i, 1, [data[i]]);
                    }
                    break;
                }
            }
        }
        return data;
    };
    BeautyDataService.prototype.checkForRange = function (data, startIndex, openSymbol, closeSymbol, elementClass) {
    };
    BeautyDataService.prototype.checkForGroup = function (data, startIndex, openSymbol, closeSymbol, elementClass) {
        var indexOfBeginningOfSpecialSymbol = startIndex;
        var indexOfEndingOfSpecialSymbol;
        var numberOfOpenedSpecialSymbols = 0;
        var numberOfClosedSpeciasSymbols = 0;
        numberOfOpenedSpecialSymbols++;
        for (var j = indexOfBeginningOfSpecialSymbol + 1; j < data.length; j++) {
            if (data[j] === openSymbol) {
                numberOfOpenedSpecialSymbols++;
            }
            if (data[j] === closeSymbol) {
                numberOfClosedSpeciasSymbols++;
            }
            if (numberOfOpenedSpecialSymbols === numberOfClosedSpeciasSymbols) {
                indexOfEndingOfSpecialSymbol = j;
                var currentSmallArray = data.slice(indexOfBeginningOfSpecialSymbol + 1, indexOfEndingOfSpecialSymbol);
                if (openSymbol === '(') {
                    var lookaround = this.checkForLookaround(data[indexOfBeginningOfSpecialSymbol + 1]);
                    if (lookaround) {
                        currentSmallArray.splice(0, 1, lookaround);
                    }
                }
                if (openSymbol === '[') {
                    var range = this.checkForNegativeRange(data[indexOfBeginningOfSpecialSymbol + 1]);
                    if (range) {
                        currentSmallArray.splice(0, 1, range);
                    }
                }
                currentSmallArray.unshift(elementClass);
                this.compileViewDataFromData(currentSmallArray);
                data.splice(indexOfBeginningOfSpecialSymbol, indexOfEndingOfSpecialSymbol -
                    indexOfBeginningOfSpecialSymbol + 1, currentSmallArray);
                break;
            }
        }
    };
    BeautyDataService.prototype.checkForQuantifier = function (data, startIndex, openSymbol, closeSymbol, elementClass) {
        var indexOfBeginningOfSpecialSymbol = startIndex;
        var indexOfEndingOfSpecialSymbol;
        var numberOfOpenedSpecialSymbols = 0;
        var numberOfClosedSpeciasSymbols = 0;
        numberOfOpenedSpecialSymbols++;
        for (var j = indexOfBeginningOfSpecialSymbol + 1; j < data.length; j++) {
            if (data[j] === openSymbol) {
                numberOfOpenedSpecialSymbols++;
            }
            if (data[j] === closeSymbol) {
                numberOfClosedSpeciasSymbols++;
            }
            if (numberOfOpenedSpecialSymbols === numberOfClosedSpeciasSymbols) {
                indexOfEndingOfSpecialSymbol = j;
                var currentSmallArray = data.slice(indexOfBeginningOfSpecialSymbol + 1, indexOfEndingOfSpecialSymbol);
                if (currentSmallArray.length === 2 && currentSmallArray[1] === ',') {
                    currentSmallArray[1] = '-';
                    currentSmallArray.push('∞');
                }
                else if (currentSmallArray.length === 3) {
                    currentSmallArray[1] = '-';
                }
                currentSmallArray.unshift(elementClass);
                this.compileViewDataFromData(currentSmallArray);
                data.splice(indexOfBeginningOfSpecialSymbol, indexOfEndingOfSpecialSymbol -
                    indexOfBeginningOfSpecialSymbol + 1, currentSmallArray);
                data[startIndex - 1].push(data[startIndex]);
                data.splice(startIndex - 1, 2, data[startIndex - 1]);
                break;
            }
        }
    };
    BeautyDataService.prototype.checkSingleSymbol = function (data, index, symbol, elementClass) {
        //checking for anchors, lookaround, single quantifier and or element
        if (elementClass === 'range') {
            data[index] = symbol;
        }
        else {
            if (elementClass === 'or') {
                data[index] = [[elementClass, symbol]];
            }
            else {
                data[index] = [elementClass, symbol];
            }
        }
    };
    BeautyDataService.prototype.checkForLookaround = function (element) {
        switch (element) {
            case this.lookaround[0].regExp + this.lookaround[2].regExp: {
                return ' lookAhead positive';
            }
            case this.lookaround[0].regExp + this.lookaround[3].regExp: {
                return ' lookAhead negative';
            }
            case this.lookaround[1].regExp + this.lookaround[2].regExp: {
                return ' lookBehind positive';
            }
            case this.lookaround[1].regExp + this.lookaround[3].regExp: {
                return ' lookBehind negative';
            }
            default:
                return '';
        }
    };
    BeautyDataService.prototype.checkForNegativeRange = function (element) {
        switch (element) {
            case '^': {
                return ' negative';
            }
            default:
                return '';
        }
    };
    BeautyDataService.prototype.checkIfString = function (data) {
        var check = false;
        if (typeof data === 'string') {
            check = true;
        }
        return check;
    };
    BeautyDataService.prototype.checkPresetInVIewData = function (el) {
        var presets = this.presets;
        for (var i = 0; i < presets.length; i++) {
            if (presets[i].name === el) {
                return presets[i].regExp;
            }
        }
        return '';
    };
    BeautyDataService.prototype.compileDataFromViewData = function (viewData) {
        for (var i = 0; i < viewData.length; i++) {
            //throwing quantifier outside
            if (viewData[i][viewData[i].length - 1] && viewData[i][viewData[i].length - 1][0] === 'quantifier') {
                viewData.splice(i + 1, 0, viewData[i][viewData[i].length - 1]);
                viewData[i].pop();
            }
            if (this.checkIfString(viewData[i])) {
                var checkForPreset = this.checkPresetInVIewData(viewData[i]);
                if (checkForPreset) {
                    viewData[i] = checkForPreset;
                }
                if (viewData[i] === 'group') {
                    viewData.splice(i, 1, '(');
                    viewData.push(')');
                }
                if (viewData[i] === ' negative') {
                    viewData.splice(i, 1, '^');
                }
                for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* rangeData */].topLeft.length; j++) {
                    if (viewData[i] === __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* rangeData */].topLeft[j].name) {
                        viewData.splice(i, 1, __WEBPACK_IMPORTED_MODULE_1__mock_elements_mock_elements__["b" /* rangeData */].topLeft[j].nameForRegExp);
                    }
                }
                continue;
            }
            var tmp = this.compileDataFromViewData(viewData[i]).slice();
            viewData.splice(i, 1);
            viewData = this.putOneArrayInAnother(i, viewData, tmp);
        }
        if (this.checkIfStringArray(viewData)) {
            var lookAheadPositiveIndex = viewData.indexOf(' lookAhead positive');
            var lookBehindPositiveIndex = viewData.indexOf(' lookBehind positive');
            var lookAheadNegativeIndex = viewData.indexOf(' lookAhead negative');
            var lookBehindNegativeIndex = viewData.indexOf(' lookBehind negative');
            if (lookAheadPositiveIndex !== -1 || lookBehindPositiveIndex !== -1
                || lookAheadNegativeIndex !== -1 || lookBehindNegativeIndex !== -1) {
                this.checkForLookaroundInViewData(viewData, lookAheadPositiveIndex, lookBehindPositiveIndex, lookAheadNegativeIndex, lookBehindNegativeIndex);
                return viewData;
            }
            var groupIndex = viewData.indexOf('group');
            var rangeIndex = viewData.indexOf('range');
            var negativeIndex = viewData.indexOf('negative');
            var quantifierIndex = viewData.indexOf('quantifier');
            var anchorIndex = viewData.indexOf('anchor');
            var anchorOppositeIndex = viewData.indexOf('anchorOpposite');
            var orIndex = viewData.indexOf('or');
            if (groupIndex !== -1) {
                viewData.splice(groupIndex, 1);
                viewData.push(')');
                viewData.unshift('(');
                return viewData;
            }
            if (rangeIndex !== -1) {
                if (negativeIndex !== -1) {
                    viewData.splice(negativeIndex, 1, '^');
                }
                viewData.splice(rangeIndex, 1);
                viewData.push(']');
                viewData.unshift('[');
                return viewData;
            }
            if (quantifierIndex !== -1) {
                this.checkForQuantifierInViewData(viewData, quantifierIndex);
                return viewData;
            }
            if (anchorIndex !== -1) {
                if (this.anchors[0].symbol === viewData[1]) {
                    viewData.length = 0;
                    viewData.push(this.anchors[0].regExp.slice());
                }
                if (this.anchors[2].symbol === viewData[1]) {
                    viewData.length = 0;
                    viewData.push(this.anchors[2].regExp.slice());
                }
                if (this.anchors[3].symbol === viewData[1]) {
                    viewData.length = 0;
                    viewData.push(this.anchors[3].regExp.slice());
                }
                return viewData;
            }
            if (anchorOppositeIndex !== -1) {
                viewData.length = 0;
                viewData.push(this.anchors[1].regExp.slice());
                return viewData;
            }
            if (orIndex !== -1) {
                viewData = [this.or.regExp];
                return viewData;
            }
        }
        return viewData;
    };
    BeautyDataService.prototype.compileDatumFromViewDatum = function (data, index) {
    };
    BeautyDataService.prototype.checkForLookaroundInViewData = function (viewData, lookAheadPositiveIndex, lookBehindPositiveIndex, lookAheadNegativeIndex, lookBehindNegativeIndex) {
        if (lookAheadPositiveIndex !== -1) {
            viewData.splice(lookAheadPositiveIndex, 1, '?=');
        }
        if (lookBehindPositiveIndex !== -1) {
            viewData.splice(lookBehindPositiveIndex, 1, '?<=');
        }
        if (lookAheadNegativeIndex !== -1) {
            viewData.splice(lookAheadNegativeIndex, 1, '?!');
        }
        if (lookBehindNegativeIndex !== -1) {
            viewData.splice(lookBehindNegativeIndex, 1, '?<!');
        }
    };
    BeautyDataService.prototype.checkForQuantifierInViewData = function (viewData, quantifierIndex) {
        viewData.splice(quantifierIndex, 1);
        var indexOfZero = viewData.indexOf('0');
        var indexOfOne = viewData.indexOf('1');
        var indexOfInfinity = viewData.indexOf('∞');
        if (viewData.length === 1) {
            viewData.push('}');
            viewData.unshift('{');
        }
        else {
            if (indexOfZero !== -1 && indexOfOne !== -1) {
                viewData.length = 0;
                viewData.push('?');
            }
            else {
                if (indexOfZero !== -1 && indexOfInfinity !== -1) {
                    viewData.length = 0;
                    viewData.push('*');
                }
                else {
                    if (indexOfOne !== -1 && indexOfInfinity !== -1) {
                        viewData.length = 0;
                        viewData.push('+');
                    }
                    else {
                        if (indexOfInfinity !== -1) {
                            viewData.length = 1;
                            viewData.push(',');
                            viewData.push('}');
                            viewData.unshift('{');
                        }
                        else {
                            var indexOfDash = viewData.indexOf('-');
                            viewData.splice(indexOfDash, 1, ',');
                            viewData.push('}');
                            viewData.unshift('{');
                        }
                    }
                }
            }
        }
    };
    BeautyDataService.prototype.putOneArrayInAnother = function (index, outerArr, innerArr) {
        var bigArray = outerArr.slice();
        var bigArrayLength = bigArray.length;
        for (var j = bigArrayLength - 1; j >= index; j--) {
            bigArray[j + innerArr.length] = bigArray[j];
        }
        for (var j = 0; j < innerArr.length; j++) {
            bigArray[j + index] = innerArr[j];
        }
        return bigArray;
    };
    BeautyDataService.prototype.checkIfStringArray = function (array) {
        for (var i = 0; i < array.length; i++) {
            if (typeof array[i] !== 'string') {
                return false;
            }
        }
        return true;
    };
    return BeautyDataService;
}());
BeautyDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BeautyDataService);

//# sourceMappingURL=beauty-data.service.js.map

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rangeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAINELEMENTS; });
var rangeData = {
    categories: {
        presets: ['\\W', '\\d', '\\s', '\\t', '\\r', '\\n', '.'],
        controlCharacters: ['\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a', '\\b', '\\t', '\\n', '\\v', '\\f',
            '\\r', '\\x0E', '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17', '\\x18', '\\x19', '\\x1A',
            '\\e', '\\x1C', '\\x1D', '\\x1E', '\\x1F', 'some_other_data_here', '\\x7F'],
        punctuation: [' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(', '\\)', '\\*', '\\+', '\\,', '\\-', '\\.', '/', 'some_other_data_here', '\\:', ';',
            '<', '\\=', '>', '\\?', '@', 'some_other_data_here', '\\[', '\\\\', '\\]', '\\^', '_', '`', '\\{', '\\|', '\\}', '~'],
        smallAlphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        bigAlphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        unicode: ['€', '\\x81', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹', 'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘', '’', '“', '”', '•',
            '–', '—', '˜', '™', 'š', '›', 'œ', '\\x9D', 'ž', 'Ÿ'],
        extended: ['\\xA0', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '\\xAD', '®',
            '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê',
            'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ',
            'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'],
        all: ['^', '\\W', '\\d', '\\s', '\\t', '\\r', '\\n', '.', '\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a',
            '\\b', '\\t', '\\n', '\\v', '\\f', '\\r', '\\x0E', '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17',
            '\\x18', '\\x19', '\\x1A', '\\e', '\\x1C', '\\x1D', '\\x1E', '\\x1F', ' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(',
            '\\)', '\\*', '\\+', '\\,', '\\-', '\\.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\\:', ';', '<', '\\=', '>', '\\?',
            '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            '\\[', '\\\\', '\\]', '\\^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z', '\\{', '\\|', '\\}', '~', '\\x7F', '€', '\\x81', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹',
            'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘',
            '’', '“', '”', '•', '–', '—', '˜', '™', 'š', '›', 'œ', '\\x9D', 'ž', 'Ÿ', '\\xA0', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«',
            '¬', '\\xAD', '®', '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ',
            'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â',
            'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ']
    },
    topLeft: [
        {
            name: 'Ⱳ',
            hint: 'Matches any character except A-Z, a-z, 0-9, and underscore.',
            elements: ['\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a', '\\b', '\\t', '\\n', '\\v', '\\f', '\\r',
                '\\x0E', '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17', '\\x18', '\\x19', '\\x1A', '\\e',
                '\\x1C', '\\x1D', '\\x1E', '\\x1F', ' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(', '\\)', '\\*', '\\+', '\\,', '\\-',
                '\\.', '/', '\\:', ';', '<', '\\=', '>', '\\?', '@', '\\[', '\\\\', '\\]', '\\^', '`', '\\{',
                '\\|', '\\}', '~', '\\x7F', '€', '\\x81', '‚', 'ƒ', '„', '…', '†', '‡', 'ˆ', '‰', 'Š',
                '‹', 'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘', '’', '“', '”', '•', '–', '—', '˜', '™', 'š', '›', 'œ', '\\x9D', 'ž', 'Ÿ', '\\xA0',
                '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '\\xAD', '®', '¯', '°', '±', '²', '³', '´', 'µ', '¶', '·', '¸', '¹', 'º', '»',
                '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×',
                'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó',
                'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'],
            nameForRegExp: '\\W'
        },
        {
            name: '#',
            hint: 'Matches a digit character.',
            elements: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            nameForRegExp: '\\d'
        },
        {
            name: '␣',
            hint: 'Any white-space character. This includes space, tab, and form feed.',
            elements: [' ', '\\t', '\\v', '\\r', '\\n', '\\f'],
            nameForRegExp: '\\s'
        },
        {
            name: '↹',
            hint: 'Tab character.',
            elements: ['\\t'],
            nameForRegExp: '\\t'
        },
        {
            name: '⮠ ',
            hint: 'Carriage-return character.',
            elements: ['\\r'],
            nameForRegExp: '\\r'
        },
        {
            name: '⮡ ',
            hint: 'Newline character.',
            elements: ['\\n'],
            nameForRegExp: '\\n'
        },
        {
            name: '⦁',
            hint: 'Matches any single character except the newline character \\n.',
            elements: ['\\x00', '\\x01', '\\x02', '\\x03', '\\x04', '\\x05', '\\x06', '\\a', '\\b', '\\t', '\\v', '\\f', '\\r', '\\x0E',
                '\\x0F', '\\x10', '\\x11', '\\x12', '\\x13', '\\x14', '\\x15', '\\x16', '\\x17', '\\x18', '\\x19', '\\x1A', '\\e', '\\x1C',
                '\\x1D', '\\x1E', '\\x1F', ' ', '\\!', '\"', '\\#', '\\$', '%', '\\&', '\'', '\\(', '\\)', '\\*', '\\+', '\\,', '\\-', '\\.',
                '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '\\:', ';', '<', '\\=', '>', '\\?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '\\[', '\\\\', '\\]', '\\^', '_', '`', 'a',
                'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '\\{', '\\|',
                '\\}', '~', '\\x7F', '€', '\\x81', '‚', 'ƒ',
                '„', '…', '†', '‡', 'ˆ', '‰', 'Š', '‹', 'Œ', '\\x8D', 'Ž', '\\x8F', '\\x90', '‘', '’', '“', '”', '•', '–', '—', '˜', '™', 'š', '›',
                'œ', '\\x9D', 'ž', 'Ÿ', '\\xA0', '¡', '¢', '£', '¤', '¥', '¦', '§', '¨', '©', 'ª', '«', '¬', '\\xAD', '®', '¯', '°', '±', '²', '³', '´',
                'µ', '¶', '·', '¸', '¹', 'º', '»', '¼', '½', '¾', '¿', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï',
                'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', '×', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë',
                'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', '÷', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ'],
            nameForRegExp: '.'
        }
    ],
    topRight: [
        {
            name: 'Positive',
            hint: '',
        },
        {
            name: 'Negative',
            hint: '',
        }
    ],
    ASCII: [
        {
            name: 'NUL',
            hint: 'DEC: 0   OCT: 000   HEX: 00   BIN: 00000000   HTML: &#000;   Description: Null char',
            nameForRegExp: '\\x00'
        },
        {
            name: 'SOH',
            hint: 'DEC: 1   OCT: 001   HEX: 01   BIN: 00000001   HTML: &#001;   Description: Start of Heading',
            nameForRegExp: '\\x01'
        },
        {
            name: 'STX',
            hint: 'DEC: 2   OCT: 002   HEX: 02   BIN: 00000010   HTML: &#002;   Description: Start of Text',
            nameForRegExp: '\\x02'
        },
        {
            name: 'ETX',
            hint: 'DEC: 3   OCT: 003   HEX: 03   BIN: 00000011   HTML: &#003;   Description: End of Text',
            nameForRegExp: '\\x03'
        },
        {
            name: 'EOT',
            hint: 'DEC: 4   OCT: 004   HEX: 04   BIN: 00000100   HTML: &#004;   Description: End of Transmission',
            nameForRegExp: '\\x04'
        },
        {
            name: 'ENQ',
            hint: 'DEC: 5   OCT: 005   HEX: 05   BIN: 00000101   HTML: &#005;   Description: Enquiry',
            nameForRegExp: '\\x05'
        },
        {
            name: 'ACK',
            hint: 'DEC: 6   OCT: 006   HEX: 06   BIN: 00000110   HTML: &#006;   Description: Acknowledgment',
            nameForRegExp: '\\x06'
        },
        {
            name: 'BEL',
            hint: 'DEC: 7   OCT: 007   HEX: 07   BIN: 00000111   HTML: &#007;   Description: Bell',
            nameForRegExp: '\\a'
        },
        {
            name: 'BS',
            hint: 'DEC: 8   OCT: 010   HEX: 08   BIN: 00001000   HTML: &#008;   Description: Back Space',
            nameForRegExp: '\\b'
        },
        {
            name: 'HT',
            hint: 'DEC: 9   OCT: 011   HEX: 09   BIN: 00001001   HTML: &#009;   Description: Horizontal Tab',
            nameForRegExp: '\\t'
        },
        {
            name: 'LF',
            hint: 'DEC: 10   OCT: 012   HEX: 0A   BIN: 00001010   HTML: &#010;   Description: Line Feed',
            nameForRegExp: '\\n'
        },
        {
            name: 'VT',
            hint: 'DEC: 11   OCT: 013   HEX: 0B   BIN: 00001011   HTML: &#011;   Description: Vertical Tab',
            nameForRegExp: '\\v'
        },
        {
            name: 'FF',
            hint: 'DEC: 12   OCT: 014   HEX: 0C   BIN: 00001100   HTML: &#012;   Description: Form Feed',
            nameForRegExp: '\\f'
        },
        {
            name: 'CR',
            hint: 'DEC: 13   OCT: 015   HEX: 0D   BIN: 00001101   HTML: &#013;   Description: Carriage Return',
            nameForRegExp: '\\r'
        },
        {
            name: 'SO',
            hint: 'DEC: 14   OCT: 016   HEX: 0E   BIN: 00001110   HTML: &#014;   Description: Shift Out / X-On',
            nameForRegExp: '\\x0E'
        },
        {
            name: 'SI',
            hint: 'DEC: 15   OCT: 017   HEX: 0F   BIN: 00001111   HTML: &#015;   Description: Shift In / X-Off',
            nameForRegExp: '\\x0F'
        },
        {
            hint: 'DEC: 16   OCT: 020   HEX: 10   BIN: 00010000   HTML: &#016;   Description: Data Line Escape',
            name: 'DLE',
            nameForRegExp: '\\x10'
        },
        {
            hint: 'DEC: 17   OCT: 021   HEX: 11   BIN: 00010001   HTML: &#017;   Description: Device Control 1 (oft. XON)',
            name: 'DC1',
            nameForRegExp: '\\x11'
        },
        {
            hint: 'DEC: 18   OCT: 022   HEX: 12   BIN: 00010010   HTML: &#018;   Description: Device Control 2',
            name: 'DC2',
            nameForRegExp: '\\x12'
        },
        {
            hint: 'DEC: 19   OCT: 023   HEX: 13   BIN: 00010011   HTML: &#019;   Description: Device Control 3 (oft. XOFF)',
            name: 'DC3',
            nameForRegExp: '\\x13'
        },
        {
            hint: 'DEC: 20   OCT: 024   HEX: 14   BIN: 00010100   HTML: &#020;   Description: Device Control 4',
            name: 'DC4',
            nameForRegExp: '\\x14'
        },
        {
            hint: 'DEC: 21   OCT: 025   HEX: 15   BIN: 00010101   HTML: &#021;   Description: Negative Acknowledgement',
            name: 'NAK',
            nameForRegExp: '\\x15'
        },
        {
            hint: 'DEC: 22   OCT: 026   HEX: 16   BIN: 00010110   HTML: &#022;   Description: Synchronous Idle',
            name: 'SYN',
            nameForRegExp: '\\x16'
        },
        {
            hint: 'DEC: 23   OCT: 027   HEX: 17   BIN: 00010111   HTML: &#023;   Description: End of Transmit Block',
            name: 'ETB',
            nameForRegExp: '\\x17'
        },
        {
            hint: 'DEC: 24   OCT: 030   HEX: 18   BIN: 00011000   HTML: &#024;   Description: Cancel',
            name: 'CAN',
            nameForRegExp: '\\x18'
        },
        {
            hint: 'DEC: 25   OCT: 031   HEX: 19   BIN: 00011001   HTML: &#025;   Description: End of Medium',
            name: 'EM',
            nameForRegExp: '\\x19'
        },
        {
            hint: 'DEC: 26   OCT: 032   HEX: 1A   BIN: 00011010   HTML: &#026;   Description: Substitute',
            name: 'SUB',
            nameForRegExp: '\\x1A'
        },
        {
            hint: 'DEC: 27   OCT: 033   HEX: 1B   BIN: 00011011   HTML: &#027;   Description: Escape',
            name: 'ESC',
            nameForRegExp: '\\e'
        },
        {
            hint: 'DEC: 28   OCT: 034   HEX: 1C   BIN: 00011100   HTML: &#028;   Description: File Separator',
            name: 'FS',
            nameForRegExp: '\\x1C'
        },
        {
            hint: 'DEC: 29   OCT: 035   HEX: 1D   BIN: 00011101   HTML: &#029;   Description: Group Separator',
            name: 'GS',
            nameForRegExp: '\\x1D'
        },
        {
            hint: 'DEC: 30   OCT: 036   HEX: 1E   BIN: 00011110   HTML: &#030;   Description: Record Separator',
            name: 'RS',
            nameForRegExp: '\\x1E'
        },
        {
            hint: 'DEC: 31   OCT: 037   HEX: 1F   BIN: 00011111   HTML: &#031;   Description: Unit Separator',
            name: 'US',
            nameForRegExp: '\\x1F'
        },
        {
            hint: 'DEC: 32   OCT: 040   HEX: 20   BIN: 00100000   HTML: &#032;   Description: Space',
            name: String.fromCharCode(32),
            nameForRegExp: ' '
        },
        {
            hint: 'DEC: 33   OCT: 041   HEX: 21   BIN: 00100001   HTML: &#033;   Description: Exclamation mark',
            name: '!',
            nameForRegExp: '\\!'
        },
        {
            hint: 'DEC: 34   OCT: 042   HEX: 22   BIN: 00100010   HTML: &#034;   Description: Double quotes (or speech marks)',
            name: '\"',
            nameForRegExp: '\"'
        },
        {
            hint: 'DEC: 35   OCT: 043   HEX: 23   BIN: 00100011   HTML: &#035;   Description: Number',
            name: '#',
            nameForRegExp: '\\#'
        },
        {
            hint: 'DEC: 36   OCT: 044   HEX: 24   BIN: 00100100   HTML: &#036;   Description: Dollar',
            name: '$',
            nameForRegExp: '\\$'
        },
        {
            hint: 'DEC: 37   OCT: 045   HEX: 25   BIN: 00100101   HTML: &#037;   Description: Procenttecken',
            name: '%',
            nameForRegExp: '%'
        },
        {
            hint: 'DEC: 38   OCT: 046   HEX: 26   BIN: 00100110   HTML: &#038;   Description: Ampersand',
            name: '&',
            nameForRegExp: '\\&'
        },
        {
            hint: 'DEC: 39   OCT: 047   HEX: 27   BIN: 00100111   HTML: &#039;   Description: Single quote',
            name: '\'',
            nameForRegExp: '\''
        },
        {
            hint: 'DEC: 40   OCT: 050   HEX: 28   BIN: 00101000   HTML: &#040;   Description: Open parenthesis (or open bracket)',
            name: '(',
            nameForRegExp: '\\('
        },
        {
            hint: 'DEC: 41   OCT: 051   HEX: 29   BIN: 00101001   HTML: &#041;   Description: Close parenthesis (or close bracket)',
            name: ')',
            nameForRegExp: '\\)'
        },
        {
            hint: 'DEC: 42   OCT: 052   HEX: 2A   BIN: 00101010   HTML: &#042;   Description: Asterisk',
            name: '*',
            nameForRegExp: '\\*'
        },
        {
            hint: 'DEC: 43   OCT: 053   HEX: 2B   BIN: 00101011   HTML: &#043;   Description: Plus',
            name: '+',
            nameForRegExp: '\\+'
        },
        {
            hint: 'DEC: 44   OCT: 054   HEX: 2C   BIN: 00101100   HTML: &#044;   Description: Comma',
            name: ',',
            nameForRegExp: '\\,'
        },
        {
            hint: 'DEC: 45   OCT: 055   HEX: 2D   BIN: 00101101   HTML: &#045;   Description: Hyphen',
            name: '-',
            nameForRegExp: '\\-'
        },
        {
            hint: 'DEC: 46   OCT: 056   HEX: 2E   BIN: 00101110   HTML: &#046;   Description: Period, dot or full stop',
            name: '.',
            nameForRegExp: '\\.'
        },
        {
            hint: 'DEC: 47   OCT: 057   HEX: 2F   BIN: 00101111   HTML: &#047;   Description: Slash or divide',
            name: '/',
            nameForRegExp: '/'
        },
        {
            hint: 'DEC: 48   OCT: 060   HEX: 30   BIN: 00110000   HTML: &#048;   Description: Zero',
            name: '0',
            nameForRegExp: '0'
        },
        {
            hint: 'DEC: 49   OCT: 061   HEX: 31   BIN: 00110001   HTML: &#049;   Description: One',
            name: '1',
            nameForRegExp: '1'
        },
        {
            hint: 'DEC: 50   OCT: 062   HEX: 32   BIN: 00110010   HTML: &#050;   Description: Two',
            name: '2',
            nameForRegExp: '2'
        },
        {
            hint: 'DEC: 51   OCT: 063   HEX: 33   BIN: 00110011   HTML: &#051;   Description: Three',
            name: '3',
            nameForRegExp: '3'
        },
        {
            hint: 'DEC: 52   OCT: 064   HEX: 34   BIN: 00110100   HTML: &#052;   Description: Four',
            name: '4',
            nameForRegExp: '4'
        },
        {
            hint: 'DEC: 53   OCT: 065   HEX: 35   BIN: 00110101   HTML: &#053;   Description: Five',
            name: '5',
            nameForRegExp: '5'
        },
        {
            hint: 'DEC: 54   OCT: 066   HEX: 36   BIN: 00110110   HTML: &#054;   Description: Six',
            name: '6',
            nameForRegExp: '6'
        },
        {
            hint: 'DEC: 55   OCT: 067   HEX: 37   BIN: 00110111   HTML: &#055;   Description: Seven',
            name: '7',
            nameForRegExp: '7'
        },
        {
            hint: 'DEC: 56   OCT: 070   HEX: 38   BIN: 00111000   HTML: &#056;   Description: Eight',
            name: '8',
            nameForRegExp: '8'
        },
        {
            hint: 'DEC: 57   OCT: 071   HEX: 39   BIN: 00111001   HTML: &#057;   Description: Nine',
            name: '9',
            nameForRegExp: '9'
        },
        {
            hint: 'DEC: 58   OCT: 072   HEX: 3A   BIN: 00111010   HTML: &#058;   Description: Colon',
            name: ':',
            nameForRegExp: '\\:'
        },
        {
            hint: 'DEC: 59   OCT: 073   HEX: 3B   BIN: 00111011   HTML: &#059;   Description: Semicolon',
            name: ';',
            nameForRegExp: ';'
        },
        {
            hint: 'DEC: 60   OCT: 074   HEX: 3C   BIN: 00111100   HTML: &#060;   Description: Less than (or open angled bracket)',
            name: '<',
            nameForRegExp: '<'
        },
        {
            hint: 'DEC: 61   OCT: 075   HEX: 3D   BIN: 00111101   HTML: &#061;   Description: Equals',
            name: '=',
            nameForRegExp: '\\='
        },
        {
            hint: 'DEC: 62   OCT: 076   HEX: 3E   BIN: 00111110   HTML: &#062;   Description: Greater than (or close angled bracket)',
            name: '>',
            nameForRegExp: '>'
        },
        {
            hint: 'DEC: 63   OCT: 077   HEX: 3F   BIN: 00111111   HTML: &#063;   Description: Question mark',
            name: '?',
            nameForRegExp: '\\?'
        },
        {
            hint: 'DEC: 64   OCT: 100   HEX: 40   BIN: 01000000   HTML: &#064;   Description: At symbol',
            name: '@',
            nameForRegExp: '@'
        },
        {
            hint: 'DEC: 65   OCT: 101   HEX: 41   BIN: 01000001   HTML: &#065;   Description: Uppercase A',
            name: 'A',
            nameForRegExp: 'A'
        },
        {
            hint: 'DEC: 66   OCT: 102   HEX: 42   BIN: 01000010   HTML: &#066;   Description: Uppercase B',
            name: 'B',
            nameForRegExp: 'B'
        },
        {
            hint: 'DEC: 67   OCT: 103   HEX: 43   BIN: 01000011   HTML: &#067;   Description: Uppercase C',
            name: 'C',
            nameForRegExp: 'C'
        },
        {
            hint: 'DEC: 68   OCT: 104   HEX: 44   BIN: 01000100   HTML: &#068;   Description: Uppercase D',
            name: 'D',
            nameForRegExp: 'D'
        },
        {
            hint: 'DEC: 69   OCT: 105   HEX: 45   BIN: 01000101   HTML: &#069;   Description: Uppercase E',
            name: 'E',
            nameForRegExp: 'E'
        },
        {
            hint: 'DEC: 70   OCT: 106   HEX: 46   BIN: 01000110   HTML: &#070;   Description: Uppercase F',
            name: 'F',
            nameForRegExp: 'F'
        },
        {
            hint: 'DEC: 71   OCT: 107   HEX: 47   BIN: 01000111   HTML: &#071;   Description: Uppercase G',
            name: 'G',
            nameForRegExp: 'G'
        },
        {
            hint: 'DEC: 72   OCT: 110   HEX: 48   BIN: 01001000   HTML: &#072;   Description: Uppercase H',
            name: 'H',
            nameForRegExp: 'H'
        },
        {
            hint: 'DEC: 73   OCT: 111   HEX: 49   BIN: 01001001   HTML: &#073;   Description: Uppercase I',
            name: 'I',
            nameForRegExp: 'I'
        },
        {
            hint: 'DEC: 74   OCT: 112   HEX: 4A   BIN: 01001010   HTML: &#074;   Description: Uppercase J',
            name: 'J',
            nameForRegExp: 'J'
        },
        {
            hint: 'DEC: 75   OCT: 113   HEX: 4B   BIN: 01001011   HTML: &#075;   Description: Uppercase K',
            name: 'K',
            nameForRegExp: 'K'
        },
        {
            hint: 'DEC: 76   OCT: 114   HEX: 4C   BIN: 01001100   HTML: &#076;   Description: Uppercase L',
            name: 'L',
            nameForRegExp: 'L'
        },
        {
            hint: 'DEC: 77   OCT: 115   HEX: 4D   BIN: 01001101   HTML: &#077;   Description: Uppercase M',
            name: 'M',
            nameForRegExp: 'M'
        },
        {
            hint: 'DEC: 78   OCT: 116   HEX: 4E   BIN: 01001110   HTML: &#078;   Description: Uppercase N',
            name: 'N',
            nameForRegExp: 'N'
        },
        {
            hint: 'DEC: 79   OCT: 117   HEX: 4F   BIN: 01001111   HTML: &#079;   Description: Uppercase O',
            name: 'O',
            nameForRegExp: 'O'
        },
        {
            hint: 'DEC: 80   OCT: 120   HEX: 50   BIN: 01010000   HTML: &#080;   Description: Uppercase P',
            name: 'P',
            nameForRegExp: 'P'
        },
        {
            hint: 'DEC: 81   OCT: 121   HEX: 51   BIN: 01010001   HTML: &#081;   Description: Uppercase Q',
            name: 'Q',
            nameForRegExp: 'Q'
        },
        {
            hint: 'DEC: 82   OCT: 122   HEX: 52   BIN: 01010010   HTML: &#082;   Description: Uppercase R',
            name: 'R',
            nameForRegExp: 'R'
        },
        {
            hint: 'DEC: 83   OCT: 123   HEX: 53   BIN: 01010011   HTML: &#083;   Description: Uppercase S',
            name: 'S',
            nameForRegExp: 'S'
        },
        {
            hint: 'DEC: 84   OCT: 124   HEX: 54   BIN: 01010100   HTML: &#084;   Description: Uppercase T',
            name: 'T',
            nameForRegExp: 'T'
        },
        {
            hint: 'DEC: 85   OCT: 125   HEX: 55   BIN: 01010101   HTML: &#085;   Description: Uppercase U',
            name: 'U',
            nameForRegExp: 'U'
        },
        {
            hint: 'DEC: 86   OCT: 126   HEX: 56   BIN: 01010110   HTML: &#086;   Description: Uppercase V',
            name: 'V',
            nameForRegExp: 'V'
        },
        {
            hint: 'DEC: 87   OCT: 127   HEX: 57   BIN: 01010111   HTML: &#087;   Description: Uppercase W',
            name: 'W',
            nameForRegExp: 'W'
        },
        {
            hint: 'DEC: 88   OCT: 130   HEX: 58   BIN: 01011000   HTML: &#088;   Description: Uppercase X',
            name: 'X',
            nameForRegExp: 'X'
        },
        {
            hint: 'DEC: 89   OCT: 131   HEX: 59   BIN: 01011001   HTML: &#089;   Description: Uppercase Y',
            name: 'Y',
            nameForRegExp: 'Y'
        },
        {
            hint: 'DEC: 90   OCT: 132   HEX: 5A   BIN: 01011010   HTML: &#090;   Description: Uppercase Z',
            name: 'Z',
            nameForRegExp: 'Z'
        },
        {
            hint: 'DEC: 91   OCT: 133   HEX: 5B   BIN: 01011011   HTML: &#091;   Description: Opening bracket',
            name: '[',
            nameForRegExp: '\\['
        },
        {
            hint: 'DEC: 92   OCT: 134   HEX: 5C   BIN: 01011100   HTML: &#092;   Description: Backslash',
            name: '\\',
            nameForRegExp: '\\\\'
        },
        {
            hint: 'DEC: 93   OCT: 135   HEX: 5D   BIN: 01011101   HTML: &#093;   Description: Closing bracket',
            name: ']',
            nameForRegExp: '\\]'
        },
        {
            hint: 'DEC: 94   OCT: 136   HEX: 5E   BIN: 01011110   HTML: &#094;   Description: Caret - circumflex',
            name: '^',
            nameForRegExp: '\\^'
        },
        {
            hint: 'DEC: 95   OCT: 137   HEX: 5F   BIN: 01011111   HTML: &#095;   Description: Underscore',
            name: '_',
            nameForRegExp: '_'
        },
        {
            hint: 'DEC: 96   OCT: 140   HEX: 60   BIN: 01100000   HTML: &#096;   Description: Grave accent',
            name: '`',
            nameForRegExp: '`'
        },
        {
            hint: 'DEC: 97   OCT: 141   HEX: 61   BIN: 01100001   HTML: &#097;   Description: Lowercase a',
            name: 'a',
            nameForRegExp: 'a'
        },
        {
            hint: 'DEC: 98   OCT: 142   HEX: 62   BIN: 01100010   HTML: &#098;   Description: Lowercase b',
            name: 'b',
            nameForRegExp: 'b'
        },
        {
            hint: 'DEC: 99   OCT: 143   HEX: 63   BIN: 01100011   HTML: &#099;   Description: Lowercase c',
            name: 'c',
            nameForRegExp: 'c'
        },
        {
            hint: 'DEC: 100   OCT: 144   HEX: 64   BIN: 01100100   HTML: &#100;   Description: Lowercase d',
            name: 'd',
            nameForRegExp: 'd'
        },
        {
            hint: 'DEC: 101   OCT: 145   HEX: 65   BIN: 01100101   HTML: &#101;   Description: Lowercase e',
            name: 'e',
            nameForRegExp: 'e'
        },
        {
            hint: 'DEC: 102   OCT: 146   HEX: 66   BIN: 01100110   HTML: &#102;   Description: Lowercase f',
            name: 'f',
            nameForRegExp: 'f'
        },
        {
            hint: 'DEC: 103   OCT: 147   HEX: 67   BIN: 01100111   HTML: &#103;   Description: Lowercase g',
            name: 'g',
            nameForRegExp: 'g'
        },
        {
            hint: 'DEC: 104   OCT: 150   HEX: 68   BIN: 01101000   HTML: &#104;   Description: Lowercase h',
            name: 'h',
            nameForRegExp: 'h'
        },
        {
            hint: 'DEC: 105   OCT: 151   HEX: 69   BIN: 01101001   HTML: &#105;   Description: Lowercase i',
            name: 'i',
            nameForRegExp: 'i'
        },
        {
            hint: 'DEC: 106   OCT: 152   HEX: 6A   BIN: 01101010   HTML: &#106;   Description: Lowercase j',
            name: 'j',
            nameForRegExp: 'j'
        },
        {
            hint: 'DEC: 107   OCT: 153   HEX: 6B   BIN: 01101011   HTML: &#107;   Description: Lowercase k',
            name: 'k',
            nameForRegExp: 'k'
        },
        {
            hint: 'DEC: 108   OCT: 154   HEX: 6C   BIN: 01101100   HTML: &#108;   Description: Lowercase l',
            name: 'l',
            nameForRegExp: 'l'
        },
        {
            hint: 'DEC: 109   OCT: 155   HEX: 6D   BIN: 01101101   HTML: &#109;   Description: Lowercase m',
            name: 'm',
            nameForRegExp: 'm'
        },
        {
            hint: 'DEC: 110   OCT: 156   HEX: 6E   BIN: 01101110   HTML: &#110;   Description: Lowercase n',
            name: 'n',
            nameForRegExp: 'n'
        },
        {
            hint: 'DEC: 111   OCT: 157   HEX: 6F   BIN: 01101111   HTML: &#111;   Description: Lowercase o',
            name: 'o',
            nameForRegExp: 'o'
        },
        {
            hint: 'DEC: 112   OCT: 160   HEX: 70   BIN: 01110000   HTML: &#112;   Description: Lowercase p',
            name: 'p',
            nameForRegExp: 'p'
        },
        {
            hint: 'DEC: 113   OCT: 161   HEX: 71   BIN: 01110001   HTML: &#113;   Description: Lowercase q',
            name: 'q',
            nameForRegExp: 'q'
        },
        {
            hint: 'DEC: 114   OCT: 162   HEX: 72   BIN: 01110010   HTML: &#114;   Description: Lowercase r',
            name: 'r',
            nameForRegExp: 'r'
        },
        {
            hint: 'DEC: 115   OCT: 163   HEX: 73   BIN: 01110011   HTML: &#115;   Description: Lowercase s',
            name: 's',
            nameForRegExp: 's'
        },
        {
            hint: 'DEC: 116   OCT: 164   HEX: 74   BIN: 01110100   HTML: &#116;   Description: Lowercase t',
            name: 't',
            nameForRegExp: 't'
        },
        {
            hint: 'DEC: 117   OCT: 165   HEX: 75   BIN: 01110101   HTML: &#117;   Description: Lowercase u',
            name: 'u',
            nameForRegExp: 'u'
        },
        {
            hint: 'DEC: 118   OCT: 166   HEX: 76   BIN: 01110110   HTML: &#118;   Description: Lowercase v',
            name: 'v',
            nameForRegExp: 'v'
        },
        {
            hint: 'DEC: 119   OCT: 167   HEX: 77   BIN: 01110111   HTML: &#119;   Description: Lowercase w',
            name: 'w',
            nameForRegExp: 'w'
        },
        {
            hint: 'DEC: 120   OCT: 170   HEX: 78   BIN: 01111000   HTML: &#120;   Description: Lowercase x',
            name: 'x',
            nameForRegExp: 'x'
        },
        {
            hint: 'DEC: 121   OCT: 171   HEX: 79   BIN: 01111001   HTML: &#121;   Description: Lowercase y',
            name: 'y',
            nameForRegExp: 'y'
        },
        {
            hint: 'DEC: 122   OCT: 172   HEX: 7A   BIN: 01111010   HTML: &#122;   Description: Lowercase z',
            name: 'z',
            nameForRegExp: 'z'
        },
        {
            hint: 'DEC: 123   OCT: 173   HEX: 7B   BIN: 01111011   HTML: &#123;   Description: Opening brace',
            name: '{',
            nameForRegExp: '\\{'
        },
        {
            hint: 'DEC: 124   OCT: 174   HEX: 7C   BIN: 01111100   HTML: &#124;   Description: Vertical bar',
            name: '|',
            nameForRegExp: '\\|'
        },
        {
            hint: 'DEC: 125   OCT: 175   HEX: 7D   BIN: 01111101   HTML: &#125;   Description: Closing brace',
            name: '}',
            nameForRegExp: '\\}'
        },
        {
            hint: 'DEC: 126   OCT: 176   HEX: 7E   BIN: 01111110   HTML: &#126;   Description: Equivalency sign - tilde',
            name: '~',
            nameForRegExp: '~'
        },
        {
            hint: 'DEC: 127   OCT: 177   HEX: 7F   BIN: 01111111   HTML: &#127;   Description: Delete',
            name: 'DEL',
            nameForRegExp: '\\x7F'
        },
        {
            hint: 'DEC: 8364   OCT: 20254   HEX: 20AC   BIN: 10000010101100   HTML: &#8364;   Description: Euro sign',
            name: '€',
            nameForRegExp: '€'
        },
        {
            hint: 'DEC: 129   OCT: 201   HEX: 81   BIN: 10000001',
            name: String.fromCharCode(129),
            nameForRegExp: '\\x81'
        },
        {
            hint: 'DEC: 8218   OCT: 20032   HEX: 201A   BIN: 10000000011010   HTML: &#8218;   Description: Single low-9 quotation mark',
            name: '‚',
            nameForRegExp: '‚'
        },
        {
            hint: 'DEC: 402   OCT: 622   HEX: 192   BIN: 110010010   HTML: &#402;   Description: Latin small letter f with hook',
            name: 'ƒ',
            nameForRegExp: 'ƒ'
        },
        {
            hint: 'DEC: 8222   OCT: 20036   HEX: 201E   BIN: 10000000011110   HTML: &#8222;   Description: Double low-9 quotation mark',
            name: '„',
            nameForRegExp: '„'
        },
        {
            hint: 'DEC: 8230   OCT: 20046   HEX: 2026   BIN: 10000000100110   HTML: &#8230;   Description: Horizontal ellipsis',
            name: '…',
            nameForRegExp: '…'
        },
        {
            hint: 'DEC: 8224   OCT: 20040   HEX: 2020   BIN: 10000000100000   HTML: &#8224;   Description: Dagger',
            name: '†',
            nameForRegExp: '†'
        },
        {
            hint: 'DEC: 8225   OCT: 20041   HEX: 2021   BIN: 10000000100001   HTML: &#8225;   Description: Double dagger',
            name: '‡',
            nameForRegExp: '‡'
        },
        {
            hint: 'DEC: 710   OCT: 1306   HEX: 2C6   BIN: 1011000110   HTML: &#710;   Description: Modifier letter circumflex accent',
            name: 'ˆ',
            nameForRegExp: 'ˆ'
        },
        {
            hint: 'DEC: 8240   OCT: 20060   HEX: 2030   BIN: 10000000110000   HTML: &#8240;   Description: Per mille sign',
            name: '‰',
            nameForRegExp: '‰'
        },
        {
            hint: 'DEC: 352   OCT: 540   HEX: 160   BIN: 101100000   HTML: &#352;   Description: Latin capital letter S with caron',
            name: 'Š',
            nameForRegExp: 'Š'
        },
        {
            hint: 'DEC: 8249   OCT: 20071   HEX: 2039   BIN: 10000000111001   HTML: &#8249;  Description: Single left-pointing angle quotation',
            name: '‹',
            nameForRegExp: '‹'
        },
        {
            hint: 'DEC: 338   OCT: 522   HEX: 152   BIN: 101010010   HTML: &#338;   Description: Latin capital ligature OE',
            name: 'Œ',
            nameForRegExp: 'Œ'
        },
        {
            hint: 'DEC: 141   OCT: 215   HEX: 8D   BIN: 10001101',
            name: String.fromCharCode(141),
            nameForRegExp: '\\x8D'
        },
        {
            hint: 'DEC: 381   OCT: 575   HEX: 17D   BIN: 101111101   HTML: &#381;   Description: Latin captial letter Z with caron',
            name: 'Ž',
            nameForRegExp: 'Ž'
        },
        {
            hint: 'DEC: 143   OCT: 217   HEX: 8F   BIN: 10001111',
            name: String.fromCharCode(143),
            nameForRegExp: '\\x8F'
        },
        {
            hint: 'DEC: 144   OCT: 220   HEX: 90   BIN: 10010000',
            name: String.fromCharCode(144),
            nameForRegExp: '\\x90'
        },
        {
            hint: 'DEC: 8216   OCT: 20030   HEX: 2018   BIN: 10000000011000   HTML: &#8216;   Description: Left single quotation mark',
            name: '‘',
            nameForRegExp: '‘'
        },
        {
            hint: 'DEC: 8217   OCT: 20031   HEX: 2019   BIN: 10000000011001   HTML: &#8217;   Description: Right single quotation mark',
            name: '’',
            nameForRegExp: '’'
        },
        {
            hint: 'DEC: 8220   OCT: 20034   HEX: 201C   BIN: 10000000011100   HTML: &#8220;   Description: Left double quotation mark',
            name: '“',
            nameForRegExp: '“'
        },
        {
            hint: 'DEC: 8221   OCT: 20035   HEX: 201D   BIN: 10000000011101   HTML: &#8221;   Description: Right double quotation mark',
            name: '”',
            nameForRegExp: '”'
        },
        {
            hint: 'DEC: 8226   OCT: 20042   HEX: 2022   BIN: 10000000100010   HTML: &#8226;   Description: Bullet',
            name: '•',
            nameForRegExp: '•'
        },
        {
            hint: 'DEC: 8211   OCT: 20023   HEX: 2013   BIN: 10000000010011   HTML: &#8211;   Description: En dash',
            name: '–',
            nameForRegExp: '–'
        },
        {
            hint: 'DEC: 8212   OCT: 20024   HEX: 2014   BIN: 10000000010100   HTML: &#8212;   Description: Em dash',
            name: '—',
            nameForRegExp: '—'
        },
        {
            hint: 'DEC: 732   OCT: 1334   HEX: 2DC   BIN: 1011011100   HTML: &#732;   Description: Small tilde',
            name: '˜',
            nameForRegExp: '˜'
        },
        {
            hint: 'DEC: 8482   OCT: 20442   HEX: 2122   BIN: 10000100100010   HTML: &#8482;   Description: Trade mark sign',
            name: '™',
            nameForRegExp: '™'
        },
        {
            hint: 'DEC: 353   OCT: 541   HEX: 161   BIN: 101100001   HTML: &#353;   Description: Latin small letter S with caron',
            name: 'š',
            nameForRegExp: 'š'
        },
        {
            hint: 'DEC: 8250   OCT: 20072   HEX: 203A   BIN: 10000000111010   HTML: &#8250;   Description: Single right-pointing angle quotation mark',
            name: '›',
            nameForRegExp: '›'
        },
        {
            hint: 'DEC: 339   OCT: 523   HEX: 153   BIN: 101010011   HTML: &#339;   Description: Latin small ligature oe',
            name: 'œ',
            nameForRegExp: 'œ'
        },
        {
            hint: 'DEC: 157   OCT: 235   HEX: 9D   BIN: 10011101',
            name: String.fromCharCode(157),
            nameForRegExp: '\\x9D'
        },
        {
            hint: 'DEC: 382   OCT: 576   HEX: 17E   BIN: 101111110   HTML: &#382;   Description: Latin small letter z with caron',
            name: 'ž',
            nameForRegExp: 'ž'
        },
        {
            hint: 'DEC: 376   OCT: 570   HEX: 178   BIN: 101111000   HTML: &#376;   Description: Latin capital letter Y with diaeresis',
            name: 'Ÿ',
            nameForRegExp: 'Ÿ'
        },
        {
            hint: 'DEC: 160   OCT: 240   HEX: A0   BIN: 10100000   HTML: &#160;   Description: Non-breaking space',
            name: String.fromCharCode(160),
            nameForRegExp: '\\xA0'
        },
        {
            hint: 'DEC: 161   OCT: 241   HEX: A1   BIN: 10100001   HTML: &#161;   Description: Inverted exclamation mark',
            name: '¡',
            nameForRegExp: '¡'
        },
        {
            hint: 'DEC: 162   OCT: 242   HEX: A2   BIN: 10100010   HTML: &#162;   Description: Cent sign',
            name: '¢',
            nameForRegExp: '¢'
        },
        {
            hint: 'DEC: 163   OCT: 243   HEX: A3   BIN: 10100011   HTML: &#163;   Description: Pound sign',
            name: '£',
            nameForRegExp: '£'
        },
        {
            hint: 'DEC: 164   OCT: 244   HEX: A4   BIN: 10100100   HTML: &#164;   Description: Currency sign',
            name: '¤',
            nameForRegExp: '¤'
        },
        {
            hint: 'DEC: 165   OCT: 245   HEX: A5   BIN: 10100101   HTML: &#165;   Description: Yen sign',
            name: '¥',
            nameForRegExp: '¥'
        },
        {
            hint: 'DEC: 166   OCT: 246   HEX: A6   BIN: 10100110   HTML: &#166;   Description: Pipe, Broken vertical bar',
            name: '¦',
            nameForRegExp: '¦'
        },
        {
            hint: 'DEC: 167   OCT: 247   HEX: A7   BIN: 10100111   HTML: &#167;   Description: Section sign',
            name: '§',
            nameForRegExp: '§'
        },
        {
            hint: 'DEC: 168   OCT: 250   HEX: A8   BIN: 10101000   HTML: &#168;   Description: Spacing diaeresis - umlaut',
            name: '¨',
            nameForRegExp: '¨'
        },
        {
            hint: 'DEC: 169   OCT: 251   HEX: A9   BIN: 10101001   HTML: &#169;   Description: Copyright sign',
            name: '©',
            nameForRegExp: '©'
        },
        {
            hint: 'DEC: 170   OCT: 252   HEX: AA   BIN: 10101010   HTML: &#170;   Description: Feminine ordinal indicator',
            name: 'ª',
            nameForRegExp: 'ª'
        },
        {
            hint: 'DEC: 171   OCT: 253   HEX: AB   BIN: 10101011   HTML: &#171;   Description: Left double angle quotes',
            name: '«',
            nameForRegExp: '«'
        },
        {
            hint: 'DEC: 172   OCT: 254   HEX: AC   BIN: 10101100   HTML: &#172;   Description: Not sign',
            name: '¬',
            nameForRegExp: '¬'
        },
        {
            hint: 'DEC: 173   OCT: 255   HEX: AD   BIN: 10101101   HTML: &#173;   Description: Soft hyphen',
            name: String.fromCharCode(173),
            nameForRegExp: '\\xAD'
        },
        {
            hint: 'DEC: 174   OCT: 256   HEX: AE   BIN: 10101110	HTML: &#174;   Description: Registered trade mark sign',
            name: '®',
            nameForRegExp: '®'
        },
        {
            hint: 'DEC: 175   OCT: 257   HEX: AF   BIN: 10101111   HTML: &#175;   Description: Spacing macron - overline',
            name: '¯',
            nameForRegExp: '¯'
        },
        {
            hint: 'DEC: 176   OCT: 260   HEX: B0   BIN: 10110000   HTML: &#176;   Description: Degree sign',
            name: '°',
            nameForRegExp: '°'
        },
        {
            hint: 'DEC: 177   OCT: 261   HEX: B1   BIN: 10110001   HTML: &#177;   Description: Plus-or-minus sign',
            name: '±',
            nameForRegExp: '±'
        },
        {
            hint: 'DEC: 178   OCT: 262   HEX: B2   BIN: 10110010   HTML: &#178;   Description: Superscript two - squared',
            name: '²',
            nameForRegExp: '²'
        },
        {
            hint: 'DEC: 179   OCT: 263   HEX: B3   BIN: 10110011   HTML: &#179;   Description: Superscript three - cubed',
            name: '³',
            nameForRegExp: '³'
        },
        {
            hint: 'DEC: 180   OCT: 264   HEX: B4   BIN: 10110100   HTML: &#180;   Description: Acute accent - spacing acute',
            name: '´',
            nameForRegExp: '´'
        },
        {
            hint: 'DEC: 181   OCT: 265   HEX: B5   BIN: 10110101   HTML: &#181;   Description: Micro sign',
            name: 'µ',
            nameForRegExp: 'µ'
        },
        {
            hint: 'DEC: 182   OCT: 266   HEX: B6   BIN: 10110110   HTML: &#182;   Description: Pilcrow sign - paragraph sign',
            name: '¶',
            nameForRegExp: '¶'
        },
        {
            hint: 'DEC: 183   OCT: 267   HEX: B7   BIN: 10110111   HTML: &#183;   Description: Middle dot - Georgian comma',
            name: '·',
            nameForRegExp: '·'
        },
        {
            hint: 'DEC: 184   OCT: 270   HEX: B8   BIN: 10111000   HTML: &#184;   Description: Spacing cedilla',
            name: '¸',
            nameForRegExp: '¸'
        },
        {
            hint: 'DEC: 185   OCT: 271   HEX: B9   BIN: 10111001   HTML: &#185;   Description: Superscript one',
            name: '¹',
            nameForRegExp: '¹'
        },
        {
            hint: 'DEC: 186   OCT: 272   HEX: BA   BIN: 10111010   HTML: &#186;   Description: Masculine ordinal indicator',
            name: 'º',
            nameForRegExp: 'º'
        },
        {
            hint: 'DEC: 187   OCT: 273   HEX: BB   BIN: 10111011   HTML: &#187;   Description: Right double angle quotes',
            name: '»',
            nameForRegExp: '»'
        },
        {
            hint: 'DEC: 188   OCT: 274   HEX: BC   BIN: 10111100   HTML: &#188;   Description: Fraction one quarter',
            name: '¼',
            nameForRegExp: '¼'
        },
        {
            hint: 'DEC: 189   OCT: 275   HEX: BD   BIN: 10111101   HTML: &#189;   Description: Fraction one half',
            name: '½',
            nameForRegExp: '½'
        },
        {
            hint: 'DEC: 190   OCT: 276   HEX: BE   BIN: 10111110   HTML: &#190;   Description: Fraction three quarters',
            name: '¾',
            nameForRegExp: '¾'
        },
        {
            hint: 'DEC: 191   OCT: 277   HEX: BF   BIN: 10111111   HTML: &#191;   Description: Inverted question mark',
            name: '¿',
            nameForRegExp: '¿'
        },
        {
            hint: 'DEC: 192   OCT: 300   HEX: C0   BIN: 11000000   HTML: &#192;   Description: Latin capital letter A with grave',
            name: 'À',
            nameForRegExp: 'À'
        },
        {
            hint: 'DEC: 193   OCT: 301   HEX: C1   BIN: 11000001   HTML: &#193;   Description: Latin capital letter A with acute',
            name: 'Á',
            nameForRegExp: 'Á'
        },
        {
            hint: 'DEC: 194   OCT: 302   HEX: C2   BIN: 11000010   HTML: &#194;   Description: Latin capital letter A with circumflex',
            name: 'Â',
            nameForRegExp: 'Â'
        },
        {
            hint: 'DEC: 195   OCT: 303   HEX: C3   BIN: 11000011   HTML: &#195;   Description: Latin capital letter A with tilde',
            name: 'Ã',
            nameForRegExp: 'Ã'
        },
        {
            hint: 'DEC: 196   OCT: 304   HEX: C4   BIN: 11000100   HTML: &#196;   Description: Latin capital letter A with diaeresis',
            name: 'Ä',
            nameForRegExp: 'Ä'
        },
        {
            hint: 'DEC: 197   OCT: 305   HEX: C5   BIN: 11000101   HTML: &#197;   Description: Latin capital letter A with ring above',
            name: 'Å',
            nameForRegExp: 'Å'
        },
        {
            hint: 'DEC: 198   OCT: 306   HEX: C6   BIN: 11000110   HTML: &#198;   Description: Latin capital letter AE',
            name: 'Æ',
            nameForRegExp: 'Æ'
        },
        {
            hint: 'DEC: 199   OCT: 307   HEX: C7   BIN: 11000111   HTML: &#199;   Description: Latin capital letter C with cedilla',
            name: 'Ç',
            nameForRegExp: 'Ç'
        },
        {
            hint: 'DEC: 200   OCT: 310   HEX: C8   BIN: 11001000   HTML: &#200;   Description: Latin capital letter E with grave',
            name: 'È',
            nameForRegExp: 'È'
        },
        {
            hint: 'DEC: 201   OCT: 311   HEX: C9   BIN: 11001001   HTML: &#201;   Description: Latin capital letter E with acute',
            name: 'É',
            nameForRegExp: 'É'
        },
        {
            hint: 'DEC: 202   OCT: 312   HEX: CA   BIN: 11001010   HTML: &#202;   Description: Latin capital letter E with circumflex',
            name: 'Ê',
            nameForRegExp: 'Ê'
        },
        {
            hint: 'DEC: 203   OCT: 313   HEX: CB   BIN: 11001011   HTML: &#203;   Description: Latin capital letter E with diaeresis',
            name: 'Ë',
            nameForRegExp: 'Ë'
        },
        {
            hint: 'DEC: 204   OCT: 314   HEX: CC   BIN: 11001100   HTML: &#204;   Description: Latin capital letter I with grave',
            name: 'Ì',
            nameForRegExp: 'Ì'
        },
        {
            hint: 'DEC: 205   OCT: 315   HEX: CD   BIN: 11001101   HTML: &#205;   Description: Latin capital letter I with acute',
            name: 'Í',
            nameForRegExp: 'Í'
        },
        {
            hint: 'DEC: 206   OCT: 316   HEX: CE   BIN: 11001110   HTML: &#206;   Description: Latin capital letter I with circumflex',
            name: 'Î',
            nameForRegExp: 'Î'
        },
        {
            hint: 'DEC: 207   OCT: 317   HEX: CF   BIN: 11001111   HTML: &#207;   Description: Latin capital letter I with diaeresis',
            name: 'Ï',
            nameForRegExp: 'Ï'
        },
        {
            hint: 'DEC: 208   OCT: 320   HEX: D0   BIN: 11010000   HTML: &#208;   Description: Latin capital letter ETH',
            name: 'Ð',
            nameForRegExp: 'Ð'
        },
        {
            hint: 'DEC: 209   OCT: 321   HEX: D1   BIN: 11010001   HTML: &#209;   Description: Latin capital letter N with tilde',
            name: 'Ñ',
            nameForRegExp: 'Ñ'
        },
        {
            hint: 'DEC: 210   OCT: 322   HEX: D2   BIN: 11010010   HTML: &#210;   Description: Latin capital letter O with grave',
            name: 'Ò',
            nameForRegExp: 'Ò'
        },
        {
            hint: 'DEC: 211   OCT: 323   HEX: D3   BIN: 11010011   HTML: &#211;   Description: Latin capital letter O with acute',
            name: 'Ó',
            nameForRegExp: 'Ó'
        },
        {
            hint: 'DEC: 212   OCT: 324   HEX: D4   BIN: 11010100   HTML: &#212;   Description: Latin capital letter O with circumflex',
            name: 'Ô',
            nameForRegExp: 'Ô'
        },
        {
            hint: 'DEC: 213   OCT: 325   HEX: D5   BIN: 11010101   HTML: &#213;   Description: Latin capital letter O with tilde',
            name: 'Õ',
            nameForRegExp: 'Õ'
        },
        {
            hint: 'DEC: 214   OCT: 326   HEX: D6   BIN: 11010110   HTML: &#214;   Description: Latin capital letter O with diaeresis',
            name: 'Ö',
            nameForRegExp: 'Ö'
        },
        {
            hint: 'DEC: 215   OCT: 327   HEX: D7   BIN: 11010111   HTML: &#215;   Description: Multiplication sign',
            name: '×',
            nameForRegExp: '×'
        },
        {
            hint: 'DEC: 216   OCT: 330   HEX: D8   BIN: 11011000   HTML: &#216;   Description: Latin capital letter O with slash',
            name: 'Ø',
            nameForRegExp: 'Ø'
        },
        {
            hint: 'DEC: 217   OCT: 331   HEX: D9   BIN: 11011001   HTML: &#217;   Description: Latin capital letter U with grave',
            name: 'Ù',
            nameForRegExp: 'Ù'
        },
        {
            hint: 'DEC: 218   OCT: 332   HEX: DA   BIN: 11011010   HTML: &#218;   Description: Latin capital letter U with acute',
            name: 'Ú',
            nameForRegExp: 'Ú'
        },
        {
            hint: 'DEC: 219   OCT: 333   HEX: DB   BIN: 11011011   HTML: &#219;   Description: Latin capital letter U with circumflex',
            name: 'Û',
            nameForRegExp: 'Û'
        },
        {
            hint: 'DEC: 220   OCT: 334   HEX: DC   BIN: 11011100   HTML: &#220;   Description: Latin capital letter U with diaeresis',
            name: 'Ü',
            nameForRegExp: 'Ü'
        },
        {
            hint: 'DEC: 221   OCT: 335   HEX: DD   BIN: 11011101   HTML: &#221;   Description: Latin capital letter Y with acute',
            name: 'Ý',
            nameForRegExp: 'Ý'
        },
        {
            hint: 'DEC: 222   OCT: 336   HEX: DE   BIN: 11011110   HTML: &#222;   Description: Latin capital letter THORN',
            name: 'Þ',
            nameForRegExp: 'Þ'
        },
        {
            hint: 'DEC: 223   OCT: 337   HEX: DF   BIN: 11011111   HTML: &#223;   Description: Latin small letter sharp s - ess-zed',
            name: 'ß',
            nameForRegExp: 'ß'
        },
        {
            hint: 'DEC: 224   OCT: 340   HEX: E0   BIN: 11100000   HTML: &#224;   Description: Latin small letter a with grave',
            name: 'à',
            nameForRegExp: 'à'
        },
        {
            hint: 'DEC: 225   OCT: 341   HEX: E1   BIN: 11100001   HTML: &#225;   Description: Latin small letter a with acute',
            name: 'á',
            nameForRegExp: 'á'
        },
        {
            hint: 'DEC: 226   OCT: 342   HEX: E2   BIN: 11100010   HTML: &#226;   Description: Latin small letter a with circumflex',
            name: 'â',
            nameForRegExp: 'â'
        },
        {
            hint: 'DEC: 227   OCT: 343   HEX: E3   BIN: 11100011   HTML: &#227;   Description: Latin small letter a with tilde',
            name: 'ã',
            nameForRegExp: 'ã'
        },
        {
            hint: 'DEC: 228   OCT: 344   HEX: E4   BIN: 11100100   HTML: &#228;   Description: Latin small letter a with diaeresis',
            name: 'ä',
            nameForRegExp: 'ä'
        },
        {
            hint: 'DEC: 229   OCT: 345   HEX: E5   BIN: 11100101   HTML: &#229;   Description: Latin small letter a with ring above',
            name: 'å',
            nameForRegExp: 'å'
        },
        {
            hint: 'DEC: 230   OCT: 346   HEX: E6   BIN: 11100110   HTML: &#230;   Description: Latin small letter ae',
            name: 'æ',
            nameForRegExp: 'æ'
        },
        {
            hint: 'DEC: 231   OCT: 347   HEX: E7   BIN: 11100111   HTML: &#231;   Description: Latin small letter c with cedilla',
            name: 'ç',
            nameForRegExp: 'ç'
        },
        {
            hint: 'DEC: 232   OCT: 350   HEX: E8   BIN: 11101000   HTML: &#232;   Description: Latin small letter e with grave',
            name: 'è',
            nameForRegExp: 'è'
        },
        {
            hint: 'DEC: 233   OCT: 351   HEX: E9   BIN: 11101001   HTML: &#233;   Description: Latin small letter e with acute',
            name: 'é',
            nameForRegExp: 'é'
        },
        {
            hint: 'DEC: 234   OCT: 352   HEX: EA   BIN: 11101010   HTML: &#234;   Description: Latin small letter e with circumflex',
            name: 'ê',
            nameForRegExp: 'ê'
        },
        {
            hint: 'DEC: 235   OCT: 353   HEX: EB   BIN: 11101011   HTML: &#235;   Description: Latin small letter e with diaeresis',
            name: 'ë',
            nameForRegExp: 'ë'
        },
        {
            hint: 'DEC: 236   OCT: 354   HEX: EC   BIN: 11101100   HTML: &#236;   Description: Latin small letter i with grave',
            name: 'ì',
            nameForRegExp: 'ì'
        },
        {
            hint: 'DEC: 237   OCT: 355   HEX: ED   BIN: 11101101   HTML: &#237;   Description: Latin small letter i with acute',
            name: 'í',
            nameForRegExp: 'í'
        },
        {
            hint: 'DEC: 238   OCT: 356   HEX: EE   BIN: 11101110   HTML: &#238;   Description: Latin small letter i with circumflex',
            name: 'î',
            nameForRegExp: 'î'
        },
        {
            hint: 'DEC: 239   OCT: 357   HEX: EF   BIN: 11101111   HTML: &#239;   Description: Latin small letter i with diaeresis',
            name: 'ï',
            nameForRegExp: 'ï'
        },
        {
            hint: 'DEC: 240   OCT: 360   HEX: F0   BIN: 11110000   HTML: &#240;   Description: Latin small letter eth',
            name: 'ð',
            nameForRegExp: 'ð'
        },
        {
            hint: 'DEC: 241   OCT: 361   HEX: F1   BIN: 11110001   HTML: &#241;   Description: Latin small letter n with tilde',
            name: 'ñ',
            nameForRegExp: 'ñ'
        },
        {
            hint: 'DEC: 242   OCT: 362   HEX: F2   BIN: 11110010   HTML: &#242;   Description: Latin small letter o with grave',
            name: 'ò',
            nameForRegExp: 'ò'
        },
        {
            hint: 'DEC: 243   OCT: 363   HEX: F3   BIN: 11110011   HTML: &#243;   Description: Latin small letter o with acute',
            name: 'ó',
            nameForRegExp: 'ó'
        },
        {
            hint: 'DEC: 244   OCT: 364   HEX: F4   BIN: 11110100   HTML: &#244;   Description: Latin small letter o with circumflex',
            name: 'ô',
            nameForRegExp: 'ô'
        },
        {
            hint: 'DEC: 245   OCT: 365   HEX: F5   BIN: 11110101   HTML: &#245;   Description: Latin small letter o with tilde',
            name: 'õ',
            nameForRegExp: 'õ'
        },
        {
            hint: 'DEC: 246   OCT: 366   HEX: F6   BIN: 11110110   HTML: &#246;   Description: Latin small letter o with diaeresis',
            name: 'ö',
            nameForRegExp: 'ö'
        },
        {
            hint: 'DEC: 247   OCT: 367   HEX: F7   BIN: 11110111   HTML: &#247;   Description: Division sign',
            name: '÷',
            nameForRegExp: '÷'
        },
        {
            hint: 'DEC: 248   OCT: 370   HEX: F8   BIN: 11111000   HTML: &#248;   Description: Latin small letter o with slash',
            name: 'ø',
            nameForRegExp: 'ø'
        },
        {
            hint: 'DEC: 249   OCT: 371   HEX: F9   BIN: 11111001   HTML: &#249;   Description: Latin small letter u with grave',
            name: 'ù',
            nameForRegExp: 'ù'
        },
        {
            hint: 'DEC: 250   OCT: 372   HEX: FA   BIN: 11111010   HTML: &#250;   Description: Latin small letter u with acute',
            name: 'ú',
            nameForRegExp: 'ú'
        },
        {
            hint: 'DEC: 251   OCT: 373   HEX: FB   BIN: 11111011   HTML: &#251;   Description: Latin small letter u with circumflex',
            name: 'û',
            nameForRegExp: 'û'
        },
        {
            hint: 'DEC: 252   OCT: 374   HEX: FC   BIN: 11111100   HTML: &#252;   Description: Latin small letter u with diaeresis',
            name: 'ü',
            nameForRegExp: 'ü'
        },
        {
            hint: 'DEC: 253   OCT: 375   HEX: FD   BIN: 11111101   HTML: &#253;   Description: Latin small letter y with acute',
            name: 'ý',
            nameForRegExp: 'ý'
        },
        {
            hint: 'DEC: 254   OCT: 376   HEX: FE   BIN: 11111110   HTML: &#254;   Description: Latin small letter thorn',
            name: 'þ',
            nameForRegExp: 'þ'
        },
        {
            hint: 'DEC: 255   OCT: 377   HEX: FF   BIN: 11111111   HTML: &#255;   Description: Latin small letter y with diaeresis',
            name: 'ÿ',
            nameForRegExp: 'ÿ'
        }
    ]
};
var MAINELEMENTS = [
    {
        id: 1,
        name: 'default',
        hint: 'Type text or choose token to make advanced search.',
    },
    {
        id: 2,
        name: 'Range',
        hint: 'Range is used for matching character or range of characters.',
        data: {}
    },
    {
        id: 3,
        name: 'Group',
        hint: 'Group is used for grouping text or tokens to change priority or make capturing for replacing.',
        data: [
            {
                name: 'Capture',
                defBg: 'purple',
            },
            {
                name: 'Non-capture',
                defBg: 'brightPurple',
            }
        ]
    },
    {
        id: 4,
        name: 'Lookaround',
        hint: 'Lookaround matches a group after your main expression without including it in the result.',
        data: [
            {
                name: 'Look ahead',
                regExp: '?'
            },
            {
                name: 'Look behind',
                regExp: '?<'
            },
            {
                name: 'Positive',
                regExp: '='
            },
            {
                name: 'Negative',
                regExp: '!'
            }
        ]
    },
    {
        id: 5,
        name: 'Anchors',
        hint: 'Anchors are used for matching in the specific position.',
        data: [
            {
                name: 'Word Boundary',
                symbol: String.fromCharCode(8697),
                regExp: '\\b'
            },
            {
                name: 'Non-Word Boundary',
                symbol: String.fromCharCode(8697),
                regExp: '\\B'
            },
            {
                name: 'String Beginning',
                symbol: '⇱',
                regExp: '\\A'
            },
            {
                name: 'String End',
                symbol: '⇲',
                regExp: '\\z'
            }
        ]
    },
    {
        id: 6,
        name: 'or',
        hint: 'Logical \'or\' is used for variation of matching.',
    }
];
//# sourceMappingURL=mock-elements.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beauty_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectionService = (function () {
    function SelectionService(dataArrayService, beautyDataService) {
        this.dataArrayService = dataArrayService;
        this.beautyDataService = beautyDataService;
        this.highlightSelection = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.highlightSelections = [];
        this.viewData = [];
        this.parentsForEnd = []; // parents array of current end
        this.startNode = [];
        this.endNode = [];
    }
    SelectionService.prototype.subscribeOnHighlightSelection = function () {
        return this.highlightSelection.asObservable();
    };
    SelectionService.prototype.pushHighlightSelection = function (data) {
        this.highlightSelection.next(data);
    };
    SelectionService.prototype.getHighlightedElements = function () {
        return this.highlightSelections;
    };
    SelectionService.prototype.handleSelectionMoving = function (data) {
        var indexOfData = this.highlightSelections.indexOf(data);
        if (this.startNode && this.ifArrayOfStrings(data)) {
            if (indexOfData === -1) {
                this.highlightSelections.push(data);
            }
            if (indexOfData !== -1) {
                this.highlightSelections.splice(indexOfData, 1);
            }
            this.pushHighlightSelection(data);
        }
        if (!this.ifArrayOfStrings(data)) {
            var checkForAllSelElInCurrEl = true; //if all elements in current el is selected, then this element selected too
            for (var i = 0; i < data.length; i++) {
                if (typeof data[i] === 'string') {
                    continue;
                }
                if (this.highlightSelections.indexOf(data[i]) === -1) {
                    checkForAllSelElInCurrEl = false;
                    break;
                }
            }
            if (checkForAllSelElInCurrEl && indexOfData === -1) {
                this.highlightSelections.push(data);
                this.pushHighlightSelection(data);
            }
            if (checkForAllSelElInCurrEl && indexOfData !== -1) {
                this.highlightSelections.splice(indexOfData, 1);
                this.pushHighlightSelection(data);
            }
        }
    };
    SelectionService.prototype.setStart = function (element) {
        this.resetAllVariables();
        if (element) {
            this.parentsForStart = [];
            this.startNode = element;
            this.findStartOrEndInViewData(element, this.viewData, this.parentsForStart);
            // this.handleSelectionMoving(element);
        }
    };
    SelectionService.prototype.getStart = function () {
        return this.startNode;
    };
    SelectionService.prototype.deleteStart = function () {
        if (this.startNode) {
            this.startNode = undefined;
            this.parentsForStart = undefined;
            // let selectedElements = this.highlightSelections;
            // let length = selectedElements.length;
            // for (let i = 0; i < length; i++) {
            //   this.pushHighlightSelection(selectedElements[0]);
            //   selectedElements.splice(0, 1);
            // }
        }
    };
    SelectionService.prototype.setEnd = function (element) {
        if (element) {
            this.endNode = element;
            this.indexOfEndInTmp = this.findStartOrEndInViewData(element, this.viewData, this.parentsForEnd);
            this.commonParent = this.findCommonParent();
            this.findAllElementsToHighlight(this.commonParent);
            this.pushHighlightSelection(this.highlightSelections);
            // this.findAllElementsToHighlight(this.commonParent.start.array, 0);
            // this.applyGrouping(); // do not delete
        }
    };
    SelectionService.prototype.findAllElementsToHighlight = function (commonParent) {
        var indexOfStart = commonParent.start.index;
        var indexOfEnd = commonParent.end.index;
        var parent = commonParent.start.array;
        for (var i = indexOfStart; i <= indexOfEnd; i++) {
            this.highlightSelections.push(parent[i]);
            this.addAllElementsToHighlightFromCurrElement(parent[i]);
        }
    };
    SelectionService.prototype.addAllElementsToHighlightFromCurrElement = function (element) {
        if (this.ifArrayOfStrings(element)) {
            return false;
        }
        for (var i = 0; i < element.length; i++) {
            if (typeof element[i] === 'string') {
                continue;
            }
            else {
                this.highlightSelections.push(element[i]);
                this.addAllElementsToHighlightFromCurrElement(element[i]);
            }
        }
    };
    SelectionService.prototype.getEnd = function () {
        return this.endNode;
    };
    SelectionService.prototype.setViewData = function (data) {
        this.viewData = data;
    };
    SelectionService.prototype.findStartOrEndInViewData = function (element, viewData, whereToPush, indexOfParent) {
        var index = viewData.indexOf(element);
        if (typeof viewData === 'string' && index === -1) {
            return -1;
        }
        if (index !== -1) {
            whereToPush.push({ array: viewData, index: index });
            return indexOfParent;
        }
        if (index === -1) {
            var tmpIndex = -1;
            for (var i = 0; i < viewData.length; i++) {
                if (typeof viewData[i] === 'string') {
                    if (i === viewData.length - 1) {
                        return -1;
                    }
                    continue;
                }
                tmpIndex = this.findStartOrEndInViewData(element, viewData[i], whereToPush, i);
                if (tmpIndex !== -1) {
                    whereToPush.push({ array: viewData, index: tmpIndex });
                    break;
                }
                if (i === viewData.length - 1) {
                    return -1;
                }
            }
            return indexOfParent;
        }
        return -1;
    };
    SelectionService.prototype.findCommonParent = function () {
        this.highlightSelections = [];
        var parent = [];
        for (var i = 0; i < this.parentsForStart.length; i++) {
            var tmpIndex = this.parentsForStart[i].index;
            // this.highlightSelections.push(this.parentsForStart[i].array[tmpIndex]);
            for (var j = 0; j < this.parentsForEnd.length; j++) {
                tmpIndex = this.parentsForEnd[j].index;
                // this.highlightSelections.push(this.parentsForEnd[j].array[tmpIndex]);
                if (this.parentsForStart[i].array === this.parentsForEnd[j].array) {
                    parent = { start: this.parentsForStart[i], end: this.parentsForEnd[j] };
                    // this.highlightSelections.splice(this.highlightSelections.indexOf(this.parentsForEnd[j].array[tmpIndex], 1));
                    // this.pushHighlightSelection(this.highlightSelections);
                    return parent;
                }
            }
        }
        return parent;
    };
    SelectionService.prototype.applyGrouping = function () {
        var start = this.commonParent.start.index;
        var end = this.commonParent.end.index;
        var countOfEl = end + 1 - start;
        var arrWithSelectedElements = this.commonParent.start.array.slice(start, end + 1);
        arrWithSelectedElements.unshift('group');
        this.commonParent.start.array.splice(start, countOfEl, arrWithSelectedElements);
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('group');
    };
    SelectionService.prototype.resetAllVariables = function () {
        this.parentsForStart = [];
        this.parentsForEnd = [];
        this.commonParent = null;
        this.startNode = [];
        this.endNode = [];
        this.indexOfEndInTmp = null;
        this.highlightSelections = [];
    };
    SelectionService.prototype.ifArrayOfStrings = function (array) {
        return this.beautyDataService.checkIfStringArray(array);
    };
    return SelectionService;
}());
SelectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__beauty_data_service__["a" /* BeautyDataService */]) === "function" && _b || Object])
], SelectionService);

var _a, _b;
//# sourceMappingURL=selection.service.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HintService = (function () {
    function HintService() {
        this.hintSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    HintService.prototype.setHint = function (hint) {
        this.hintSubject.next(hint);
    };
    HintService.prototype.getHint = function () {
        return this.hintSubject.asObservable();
    };
    return HintService;
}());
HintService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], HintService);

//# sourceMappingURL=hint.service.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_array_model__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_data_model__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RangeDataService = (function () {
    function RangeDataService() {
        this.currentRangeArray = new __WEBPACK_IMPORTED_MODULE_1__range_array_model__["a" /* RangeArray */]([], []);
        this.presetFullElArray = [];
        this.hoveredPresets = [];
        this.rangeData = new __WEBPACK_IMPORTED_MODULE_2__range_data_model__["a" /* RangeData */]();
        this.presetNameArray = [];
        this.rangeData = __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["b" /* rangeData */];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["b" /* rangeData */].topLeft.length; i++) {
            this.presetNameArray[i] = __WEBPACK_IMPORTED_MODULE_3__mock_elements_mock_elements__["b" /* rangeData */].topLeft[i].nameForRegExp;
        }
    }
    RangeDataService.prototype.deleteArrayFromArray = function (array, arrayToDeleteFrom) {
        for (var i = 0; i < array.length; i++) {
            var index = arrayToDeleteFrom.indexOf(array[i]);
            if (index >= 0) {
                arrayToDeleteFrom.splice(index, 1);
            }
        }
        return arrayToDeleteFrom;
    };
    RangeDataService.prototype.checkArrayInArray = function (array, inArray) {
        var check = true;
        for (var i = 0; i < array.length; i++) {
            if (inArray.indexOf(array[i]) === -1) {
                check = false;
                break;
            }
        }
        return check;
    };
    RangeDataService.prototype.rangeDataTopLeftInsertionSort = function (array) {
        for (var i = 1; i < array.length; i++) {
            var j = i;
            while (j > 0 && array[j - 1].elements.length < array[j].elements.length) {
                var tmp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = tmp;
                j--;
            }
        }
        return array;
    };
    RangeDataService.prototype.getRangeData = function () {
        return this.rangeData;
    };
    RangeDataService.prototype.getPresetNameArray = function () {
        return this.presetNameArray;
    };
    RangeDataService.prototype.setRangePresets = function (presets) {
        this.currentRangeArray.presets = presets;
    };
    RangeDataService.prototype.getRangePresets = function () {
        return this.currentRangeArray.presets;
    };
    RangeDataService.prototype.setRangeElements = function (elements) {
        this.currentRangeArray.elements = elements;
    };
    RangeDataService.prototype.getRangeElements = function () {
        return this.currentRangeArray.elements;
    };
    RangeDataService.prototype.setPresetFullElArray = function (elements) {
        this.presetFullElArray = elements;
    };
    RangeDataService.prototype.getPresetFullElArray = function () {
        return this.presetFullElArray;
    };
    RangeDataService.prototype.setHoveredPresets = function (elements) {
        this.hoveredPresets = elements;
    };
    RangeDataService.prototype.getHoveredPresets = function () {
        return this.hoveredPresets;
    };
    RangeDataService.prototype.elementsFromPresetFullEl = function (presetFullEl) {
        var elements = [];
        var presetFullElCopy = presetFullEl.slice();
        var rangeDataTopLeft = this.rangeData.topLeft.slice();
        rangeDataTopLeft = this.rangeDataTopLeftInsertionSort(rangeDataTopLeft);
        for (var i = 0; i < rangeDataTopLeft.length; i++) {
            if (this.checkArrayInArray(rangeDataTopLeft[i].elements, presetFullElCopy)) {
                presetFullElCopy = this.deleteArrayFromArray(rangeDataTopLeft[i].elements, presetFullElCopy);
                elements.push(rangeDataTopLeft[i].nameForRegExp);
            }
        }
        elements.push.apply(elements, presetFullElCopy);
        return elements;
    };
    RangeDataService.prototype.presetsFromPresetFullEl = function (presetFullEl) {
        var presets = [];
        var presetFullElCopy = presetFullEl.slice();
        var rangeDataTopLeft = this.rangeData.topLeft.slice();
        rangeDataTopLeft = this.rangeDataTopLeftInsertionSort(rangeDataTopLeft);
        for (var i = 0; i < rangeDataTopLeft.length; i++) {
            if (this.checkArrayInArray(rangeDataTopLeft[i].elements, presetFullElCopy)) {
                presets.push(rangeDataTopLeft[i].nameForRegExp);
            }
        }
        return presets;
    };
    RangeDataService.prototype.arrayUnique = function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
        return a;
    };
    return RangeDataService;
}());
RangeDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RangeDataService);

//# sourceMappingURL=range-data.service.js.map

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Element; });
var Element = (function () {
    function Element() {
    }
    return Element;
}());

//# sourceMappingURL=element.model.js.map

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });

var NotificationService = (function () {
    function NotificationService() {
        this.quantifierDestroyed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.globalQuantifierClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    return NotificationService;
}());

//# sourceMappingURL=notification.service.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantifierService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuantifierService = (function () {
    function QuantifierService() {
        this.clicked = false;
    }
    QuantifierService.prototype.click = function (value) {
        this.clicked = value;
    };
    QuantifierService.prototype.getClickState = function () {
        return this.clicked;
    };
    QuantifierService.prototype.setQuantifier = function (quantifier) {
        this.quantifier = quantifier;
    };
    QuantifierService.prototype.getQuantifier = function () {
        var tmp = [];
        if (this.quantifier) {
            tmp = this.quantifier.slice();
            this.quantifier.length = 0;
        }
        return tmp;
    };
    return QuantifierService;
}());
QuantifierService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], QuantifierService);

//# sourceMappingURL=quantifier.service.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_elements_position_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaretService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaretService = (function () {
    function CaretService(allElPositionService) {
        this.allElPositionService = allElPositionService;
    }
    CaretService.prototype.ngOnInit = function () { };
    CaretService.prototype.setAreaCoords = function () {
        this.area = document.getElementsByClassName('area')[0];
        this.area.focus();
        this.areaPosition = this.area.getBoundingClientRect();
        this.caret = document.getElementsByTagName('caret')[0];
        this.startBlinking();
    };
    CaretService.prototype.startBlinking = function () {
        var _this = this;
        this.area.focus();
        this.caret.style.opacity = '';
        clearInterval(this.caretIntervalShow);
        clearInterval(this.caretIntervalHide);
        clearTimeout(this.caretTimeoutShow);
        this.caretIntervalHide = setInterval(function () {
            _this.caret.style.display = 'none';
        }, 1000);
        this.caretTimeoutShow = setTimeout(function () {
            _this.caretIntervalShow = setInterval(function () {
                _this.caret.style.display = 'block';
            }, 1000);
        }, 500);
    };
    CaretService.prototype.stopBlinking = function () {
        clearInterval(this.caretIntervalShow);
        clearInterval(this.caretIntervalHide);
        clearTimeout(this.caretTimeoutShow);
        this.caret.style.display = 'none';
    };
    CaretService.prototype.pauseBlinking = function () {
        clearInterval(this.caretIntervalShow);
        clearInterval(this.caretIntervalHide);
        clearTimeout(this.caretTimeoutShow);
        this.caret.style.display = 'block';
        this.startBlinking();
    };
    CaretService.prototype.fixCaretPosition = function (viewData, inputFromKeyboard, withoutPause) {
        if (!withoutPause) {
            this.pauseBlinking();
        }
        this.areaPosition = this.area.getBoundingClientRect();
        var position = this.allElPositionService.getElementPosition(inputFromKeyboard);
        var skipCount = 0;
        if (typeof (inputFromKeyboard.parent[0]) === 'string')
            skipCount++;
        if (typeof (inputFromKeyboard.parent[1]) === 'string')
            skipCount++;
        if (!position) {
            this.caret.style.top = this.areaPosition.height / 2 - 7 + 'px';
            this.caret.style.left = this.areaPosition.width / 2 - 2 + 'px';
        }
        else if (!position.previous && !position.current && !position.next) {
            this.stopBlinking();
        }
        else if (inputFromKeyboard.index - skipCount === -1) {
            this.caret.style.top = position.next.top - this.areaPosition.top - window.pageYOffset + (position.next.height - 16) / 2 + 'px';
            this.caret.style.left = position.next.left - this.areaPosition.left - window.pageXOffset - 5 + 'px';
        }
        else {
            if (!position.current && position.previous) {
                this.caret.style.left = position.previous.left + position.previous.width - this.areaPosition.left - window.pageXOffset - 2 + 'px';
                this.caret.style.top = position.previous.top - this.areaPosition.top - window.pageYOffset + (position.previous.height - 16) / 2 + 'px';
                return;
            }
            this.caret.style.top = position.current.top - this.areaPosition.top - window.pageYOffset + (position.current.height - 16) / 2 + 'px';
            if (inputFromKeyboard.direction === 'left') {
                this.caret.style.left = position.current.left - this.areaPosition.left - window.pageXOffset - 4 + 'px';
            }
            else {
                this.caret.style.left = position.current.left - this.areaPosition.left - window.pageXOffset + position.current.width - 3 + 'px';
            }
        }
    };
    CaretService.prototype.getCaretPosition = function () {
        return {
            top: Number.parseFloat(this.caret.style.top) + this.areaPosition.top,
            left: Number.parseFloat(this.caret.style.left) + this.areaPosition.left,
            height: 16
        };
    };
    return CaretService;
}());
CaretService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _a || Object])
], CaretService);

var _a;
//# sourceMappingURL=caret.service.js.map

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Position; });
var ElementPosition = (function () {
    function ElementPosition() {
    }
    return ElementPosition;
}());

var Position = (function () {
    function Position(top, left, width, height) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    return Position;
}());

//# sourceMappingURL=element-position.model.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hint_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_data_model__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mock_elements_mock_elements__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsciiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AsciiService = (function () {
    function AsciiService(rangeDataService, hintService) {
        this.rangeDataService = rangeDataService;
        this.hintService = hintService;
        this.presetNameArray = [];
        this.rangeData = new __WEBPACK_IMPORTED_MODULE_3__range_data_model__["a" /* RangeData */]();
        this.rangeData = __WEBPACK_IMPORTED_MODULE_4__mock_elements_mock_elements__["b" /* rangeData */];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_4__mock_elements_mock_elements__["b" /* rangeData */].topLeft.length; i++) {
            this.presetNameArray[i] = __WEBPACK_IMPORTED_MODULE_4__mock_elements_mock_elements__["b" /* rangeData */].topLeft[i].nameForRegExp;
        }
    }
    AsciiService.prototype.ngOnInit = function () {
        this.rangeData = this.rangeDataService.getRangeData();
        this.presetNameArray = this.rangeDataService.getPresetNameArray();
    };
    AsciiService.prototype.setData = function (data) {
        this.data = data;
    };
    AsciiService.prototype.getIndexOfFirstEl = function () {
        return this.indexOfFirstEl;
    };
    AsciiService.prototype.getIndexOfLastEl = function () {
        return this.indexOfLastEl;
    };
    AsciiService.prototype.onMouseOver = function (hint, indexOfLastEl, event) {
        if (event) {
            if (!event.shiftKey || !this.indexOfFirstEl) {
                this.setHint(hint);
            }
            else {
                this.indexOfLastEl = indexOfLastEl;
            }
        }
    };
    AsciiService.prototype.onMouseOut = function (event) {
        this.setHint(undefined);
        if (event) {
            if (!event.shiftKey && this.indexOfLastEl) {
                this.indexOfLastEl = undefined;
            }
        }
    };
    AsciiService.prototype.addData = function (el, indexOfEl) {
        var indexOfFirst = this.indexOfFirstEl;
        var indexOfLast = this.indexOfLastEl;
        if (indexOfFirst && indexOfLast) {
            this.addDataShiftPressed(indexOfFirst, indexOfLast);
        }
        else {
            this.addDatum(el, indexOfEl);
        }
    };
    AsciiService.prototype.addDataShiftPressed = function (indexOfFirst, indexOfLast) {
        if (indexOfLast < indexOfFirst) {
            var tmp = indexOfFirst;
            indexOfFirst = indexOfLast - 1;
            indexOfLast = tmp - 1;
        }
        this.indexOfFirstEl = indexOfLast;
        this.indexOfLastEl = undefined;
        for (var i = indexOfFirst + 1; i <= indexOfLast; i++) {
            this.addData(this.data[i].nameForRegExp);
        }
    };
    AsciiService.prototype.addDatum = function (el, indexOfEl) {
        var presets = this.rangeDataService.getRangePresets();
        var elements = this.rangeDataService.getRangeElements();
        var presetFullElArray = this.rangeDataService.getPresetFullElArray();
        var presetIndex = this.presetNameArray.indexOf(el);
        if (presetIndex > -1) {
            var viewDataPresetIndex = presets.indexOf(this.rangeData.topLeft[presetIndex].nameForRegExp);
            if (viewDataPresetIndex > -1) {
                presetFullElArray =
                    this.rangeDataService.deleteArrayFromArray(this.rangeData.topLeft[presetIndex].elements, presetFullElArray);
            }
            else {
                presetFullElArray.push.apply(presetFullElArray, this.rangeData.topLeft[presetIndex].elements);
                presetFullElArray = this.rangeDataService.arrayUnique(presetFullElArray);
            }
        }
        else {
            var presetFullElIndex = presetFullElArray.indexOf(el);
            if (presetFullElIndex > -1) {
                presetFullElArray.splice(presetFullElIndex, 1);
            }
            else {
                presetFullElArray.push(el);
                this.indexOfFirstEl = indexOfEl;
            }
        }
        elements = this.rangeDataService.elementsFromPresetFullEl(presetFullElArray);
        presets = this.rangeDataService.presetsFromPresetFullEl(presetFullElArray);
        this.rangeDataService.setPresetFullElArray(presetFullElArray);
        this.rangeDataService.setRangeElements(elements);
        this.rangeDataService.setRangePresets(presets);
    };
    AsciiService.prototype.setHint = function (data) {
        this.hintService.setHint(data);
    };
    return AsciiService;
}());
AsciiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */]) === "function" && _b || Object])
], AsciiService);

var _a, _b;
//# sourceMappingURL=ascii.service.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeData; });
var RangeData = (function () {
    function RangeData() {
    }
    return RangeData;
}());

//# sourceMappingURL=range-data.model.js.map

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeArray; });
var RangeArray = (function () {
    function RangeArray(presets, elements) {
        this.presets = presets;
        this.elements = elements;
    }
    return RangeArray;
}());

//# sourceMappingURL=range-array.model.js.map

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(118);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_input_beauty_data_selection_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(elementService, selectionService) {
        this.elementService = elementService;
        this.selectionService = selectionService;
        this.elementToEdit = false;
        this.isHideMainEl = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementClickedSubscription = this.elementService.getClickedElement()
            .subscribe(function (element) { return _this.selectedMainElement = element; });
        this.editElementClickedSubscription = this.elementService.getElementToEditClick()
            .subscribe(function (show) { return _this.elementToEdit = show; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.elementClickedSubscription.unsubscribe();
        this.editElementClickedSubscription.unsubscribe();
    };
    AppComponent.prototype.deleteStartSelection = function () {
        this.selectionService.deleteStart();
    };
    AppComponent.prototype.hideMainElements = function (hide) {
        this.isHideMainEl = hide;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'main-app',
        template: __webpack_require__(190),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__text_input_beauty_data_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__text_input_beauty_data_selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_elements_main_elements_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_input_text_input_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__text_input_selected_element_hint_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__text_input_selected_element_selected_element_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__text_input_beauty_data_beauty_data_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text_input_beauty_data_beauty_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__text_input_beauty_data_quantifier_quantifier_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__text_input_beauty_data_selection_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__text_input_all_elements_position_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text_input_beauty_data_quantifier_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__text_input_beauty_data_selected_element_view_selected_element_view_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__text_input_caret_caret_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__text_input_beauty_data_range_beauty_data_range_beauty_data_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text_input_read_reg_exp_read_reg_exp_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__text_input_selected_element_selected_element_module__["a" /* SelectedElementModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__main_elements_main_elements_component__["a" /* MainElementsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__text_input_text_input_component__["a" /* TextInputComponent */],
            __WEBPACK_IMPORTED_MODULE_10__text_input_beauty_data_beauty_data_component__["a" /* BeautyDataComponent */],
            __WEBPACK_IMPORTED_MODULE_16__text_input_beauty_data_selected_element_view_selected_element_view_component__["a" /* SelectedElementViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__text_input_caret_caret_component__["a" /* CaretComponent */],
            __WEBPACK_IMPORTED_MODULE_18__text_input_beauty_data_range_beauty_data_range_beauty_data_component__["a" /* RangeBeautyDataComponent */],
            __WEBPACK_IMPORTED_MODULE_19__text_input_read_reg_exp_read_reg_exp_component__["a" /* ReadRegExpComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__elements_element_service__["a" /* ElementService */],
            __WEBPACK_IMPORTED_MODULE_7__dataArray_dataArray_service__["a" /* DataArrayService */],
            __WEBPACK_IMPORTED_MODULE_8__text_input_selected_element_hint_service__["a" /* HintService */],
            __WEBPACK_IMPORTED_MODULE_11__text_input_beauty_data_beauty_data_service__["a" /* BeautyDataService */],
            __WEBPACK_IMPORTED_MODULE_12__text_input_beauty_data_quantifier_quantifier_service__["a" /* QuantifierService */],
            __WEBPACK_IMPORTED_MODULE_13__text_input_beauty_data_selection_service__["a" /* SelectionService */],
            __WEBPACK_IMPORTED_MODULE_14__text_input_all_elements_position_service__["a" /* AllElementsPositionService */],
            __WEBPACK_IMPORTED_MODULE_15__text_input_beauty_data_quantifier_notification_service__["a" /* NotificationService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_input_all_elements_position_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__text_input_beauty_data_beauty_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainElementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainElementsComponent = (function () {
    function MainElementsComponent(elementService, dataArrayService, beautyDataService, allElPosService) {
        this.elementService = elementService;
        this.dataArrayService = dataArrayService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.displayMainEl = true;
        this.STATICHINT = 'Type text or choose token to make advanced search.';
        this.customHint = '';
    }
    MainElementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getElements();
        this.elementService.displayNoMainElSubscription().subscribe(function (data) {
            _this.displayMainEl = data.show;
            _this.customHint = data.hint;
        });
    };
    MainElementsComponent.prototype.onMouseOver = function (element) {
        this.hoveredElement = element;
    };
    MainElementsComponent.prototype.onMouseOut = function () {
        this.hoveredElement = undefined;
    };
    MainElementsComponent.prototype.onSelect = function (element) {
        if (element.name !== 'or') {
            this.elementService.elementClicked(element);
        }
        else {
            this.handleOr();
        }
    };
    MainElementsComponent.prototype.handleOr = function () {
        var globalData = this.dataArrayService.getData();
        var parent = this.allElPosService.getInputFromKeyboard();
        var data = ['|'];
        if (!parent) {
            globalData = globalData.concat(data);
            this.dataArrayService.setData(globalData);
        }
        else {
            var newOr = this.beautyDataService.compileViewDataFromData(data.slice())[0];
            newOr = newOr[0];
            if (parent.direction === 'left') {
                parent.parent.splice(parent.index, 0, newOr);
            }
            if (parent.direction === 'right') {
                parent.parent.splice(parent.index + 1, 0, newOr);
            }
            this.allElPosService.setInputFromKeyboardIndex(parent.index + 1);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
        }
    };
    MainElementsComponent.prototype.getElements = function () {
        var _this = this;
        this.elementService.getElements().then(function (elements) { return _this.elements = elements; });
    };
    return MainElementsComponent;
}());
MainElementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'main-elements',
        template: __webpack_require__(191),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__text_input_beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__text_input_beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__text_input_all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__text_input_all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _d || Object])
], MainElementsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=main-elements.component.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantifier_quantifier_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_model__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selection_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_elements_position_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__element_position_model__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quantifier_notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__caret_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeautyDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BeautyDataComponent = (function () {
    function BeautyDataComponent(elementService, quantifierService, selectionService, notificationService, allElPosService, caretServise) {
        this.elementService = elementService;
        this.quantifierService = quantifierService;
        this.selectionService = selectionService;
        this.notificationService = notificationService;
        this.allElPosService = allElPosService;
        this.caretServise = caretServise;
        this.passViewDataHigher = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.toggleGlobalQuantClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.hideParentQuantifier = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.passSelectedElementPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.selectionData = [];
        this.sliceNumber = 0;
        this.currentClass = '';
        this.hovered = false;
        this.alwaysShowQuantifier = false;
        this.caret = document.getElementsByTagName('caret')[0];
        this.isShowQuantifier = true; // for curr component
    }
    BeautyDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cancelEditSubscription = this.elementService.cancelEditingSubscription()
            .subscribe(function () {
            _this.deleteEditClass();
        });
        this.notificationService.quantifierDestroyed
            .subscribe(function (data) {
            _this.toggleGlobalQuantClicked.emit('destroyed');
        });
        this.notificationService.globalQuantifierClicked
            .subscribe(function (data) {
            _this.alwaysShowQuantifier = data.show;
            if (data.quantifier !== null) {
                _this.isShowQuantifier = false;
                _this.toggleGlobalQuantClicked.emit('destroyed');
                _this.handleDataFromQuantifier(data.quantifier);
                return;
            }
            if (data.show) {
                _this.toggleGlobalQuantClicked.emit('show');
            }
            else {
                _this.toggleGlobalQuantClicked.emit('hide');
            }
        });
        if (this.viewData[0] === 'edit') {
            this.currentClass += 'editing ';
            this.viewData.shift();
        }
        this.checkClass(this.viewData);
        this.isShowQuantifier = this.checkIsShowQuantifierComponent();
        this.selectionSubscription = this.selectionService.subscribeOnHighlightSelection()
            .subscribe(function (data) {
            if (_this.selectionData !== data) {
                _this.selectionData = data;
            }
        });
    };
    BeautyDataComponent.prototype.deleteEditClass = function () {
        var cssClass = this.currentClass.split(' ');
        var index = cssClass.indexOf('editing');
        if (index !== -1) {
            this.quantifierService.click(false);
            cssClass.splice(index, 1);
        }
        this.currentClass = '';
        this.sliceNumber = 0;
        this.checkClass(this.viewData);
    };
    BeautyDataComponent.prototype.ngAfterViewInit = function () {
        var quantifierElements = this.element.nativeElement.getElementsByTagName('quantifier');
        if (quantifierElements.length > 0) {
            var quantifierElement = quantifierElements[quantifierElements.length - 1];
            if (quantifierElement) {
                var width = quantifierElement.getBoundingClientRect().width;
                var height = quantifierElement.getBoundingClientRect().height;
                if (this.quantifierSpace) {
                    this.quantifierSpace.nativeElement.style.width = width - 23 + 'px';
                }
            }
        }
    };
    BeautyDataComponent.prototype.ngDoCheck = function () {
        var quantifierElements = this.element.nativeElement.getElementsByTagName('quantifier');
        if (quantifierElements.length > 0) {
            var quantifierElement = quantifierElements[quantifierElements.length - 1];
            if (quantifierElement) {
                var width = quantifierElement.getBoundingClientRect().width;
                var height = quantifierElement.getBoundingClientRect().height;
                if (this.quantifierSpace) {
                    this.quantifierSpace.nativeElement.style.width = width - 23 + 'px';
                }
            }
        }
        this.isShowQuantifier = this.checkIsShowQuantifierComponent();
        if (this.currentClass.length > 0 || (this.viewData.length === 1
            && typeof this.viewData[0] === 'string')) {
            this.currentElementPosition = new __WEBPACK_IMPORTED_MODULE_6__element_position_model__["a" /* ElementPosition */]();
            this.currentElementPosition.element = this.viewData;
            var clientCoords = this.element.nativeElement.getBoundingClientRect();
            var top = clientCoords.top + window.pageYOffset;
            var left = clientCoords.left + window.pageXOffset;
            var width = clientCoords.right - clientCoords.left;
            if (width === 0)
                return;
            var height = clientCoords.bottom - clientCoords.top;
            this.currentElementPosition.position = new __WEBPACK_IMPORTED_MODULE_6__element_position_model__["b" /* Position */](top, left, width, height);
            this.addElementToElementsPosition(this.currentElementPosition);
        }
    };
    BeautyDataComponent.prototype.ngOnDestroy = function () {
        this.caretServise.startBlinking();
        this.deleteElementToElementsPosition(this.currentElementPosition);
        this.cancelEditSubscription.unsubscribe();
        this.selectionSubscription.unsubscribe();
    };
    BeautyDataComponent.prototype.checkClass = function (data) {
        var firstEl = data[0];
        var secondEl = data[1];
        if (firstEl === 'group' || firstEl === 'range' || firstEl === 'quantifier' || firstEl === 'anchor'
            || firstEl === 'anchorOpposite' || firstEl === 'or') {
            this.currentClass += firstEl;
            this.sliceNumber++;
            // data.splice(0, 1);
        }
        if (secondEl === ' negative') {
            this.currentClass += secondEl;
            this.sliceNumber++;
            // data.splice(0, 1);
        }
        if (secondEl === ' lookAhead positive' || secondEl === ' lookAhead negative'
            || secondEl === ' lookBehind positive' || secondEl === ' lookBehind negative') {
            this.currentClass += secondEl;
            this.sliceNumber++;
            // data.splice(0, 1);
        }
        if (this.currentClass.indexOf('range') !== -1 || this.currentClass.indexOf('anchor') !== -1
            || this.currentClass.indexOf('quantifier') !== -1
            || this.currentClass.indexOf('or') !== -1) {
            this.currEl.nativeElement.contentEditable = false;
        }
        return data;
    };
    BeautyDataComponent.prototype.checkIfString = function (data) {
        var check = false;
        if (typeof data === 'string') {
            check = true;
        }
        return check;
    };
    BeautyDataComponent.prototype.handleMouseMove = function (event) {
        var elementToRemove = event.target.parentElement.parentElement.getElementsByTagName('quantifier')[0];
        if (elementToRemove && elementToRemove.style.display === 'none' && !this.quantifierService.getClickState()) {
            elementToRemove.style.display = 'block';
        }
    };
    BeautyDataComponent.prototype.showQuantifier = function (event, show) {
        if (show && this.isShowQuantifier && this.currentClass.indexOf('quantifier') === -1) {
            this.element.nativeElement.style.zIndex = 7;
        }
        else if (!this.alwaysShowQuantifier) {
            this.element.nativeElement.removeAttribute("style");
        }
        if (this.viewData.length === 1 || typeof (this.viewData[0]) !== 'string') {
            return;
        }
        if (!(show === true && this.quantifierService.getClickState())) {
            this.hovered = show;
            var inputFromKeyb = this.allElPosService.getInputFromKeyboard();
            if (show && inputFromKeyb.parent[inputFromKeyb.index - (inputFromKeyb.direction === 'left' ? 1 : 0)] === this.viewData) {
                this.caret.style.opacity = 0;
            }
            else {
                this.caret.style.opacity = '';
            }
        }
        var hint;
        if (show === true) {
            switch (this.viewData[0]) {
                case 'range':
                    hint = 'Double-click to select Range and change its options.';
                    break;
                case 'group':
                    hint = 'Click to input in Group, double-click to select Group and change its options.';
                    break;
                case 'anchor':
                    hint = 'Double-click to select Anchor and change its options.';
                    break;
                case 'anchorOpposite':
                    hint = 'Double-click to select Anchor and change its options.';
                    break;
                case 'or':
                    hint = 'Logical \'or\'.';
                    break;
            }
        }
        if (show === true && this.isShowQuantifier) {
            // switch (this.viewData[0]) {
            //   case 'range': hint = 'Double-click to select Range and change its options.'; break;
            //   case 'group': hint = 'Click to input in Group, double-click to select Group and change its options.'; break;
            //   case 'anchor': hint = 'Double-click to select Anchor and change its options.'; break;
            //   case 'or':  hint = 'Logical \"OR\".'; break;
            // }
        }
        else {
            show = false;
        }
        this.hideParentQuantifier.emit(!show);
        this.elementService.displayNoMainEl({ show: true, hint: hint });
    };
    BeautyDataComponent.prototype.hideQuantifier = function (event) {
        this.hovered = event;
    };
    BeautyDataComponent.prototype.passClickedStatusHigher = function (value) {
        this.toggleGlobalQuantClicked.emit(value);
    };
    BeautyDataComponent.prototype.handleQuantifierClicked = function (data) {
        this.alwaysShowQuantifier = data.show;
        if (data.quantifier !== null) {
            this.isShowQuantifier = false;
            this.toggleGlobalQuantClicked.emit('destroyed');
            this.handleDataFromQuantifier(data.quantifier);
            return;
        }
        if (data.show) {
            this.toggleGlobalQuantClicked.emit('show');
        }
        else {
            this.toggleGlobalQuantClicked.emit('hide');
        }
    };
    BeautyDataComponent.prototype.handleDataFromQuantifier = function (data) {
        var viewDataToPassUp = this.viewData.slice();
        viewDataToPassUp.push(data);
        var state = {
            currentArray: this.viewData,
            futureArray: viewDataToPassUp
        };
        this.passViewDataHigher.emit(state);
    };
    BeautyDataComponent.prototype.checkIsShowQuantifierComponent = function () {
        if (this.viewData[0] === 'quantifier' ||
            this.viewData[0] === 'anchor' ||
            this.viewData[0] === 'anchorOpposite' ||
            this.viewData[0] === 'or' ||
            (this.viewData.length > 0 && this.viewData[this.viewData.length - 1][0] === 'quantifier')) {
            return false;
        }
        return true;
    };
    BeautyDataComponent.prototype.handleInnerViewData = function (state) {
        var index = this.viewData.indexOf(state.currentArray);
        var viewDataToPassUp = this.viewData.slice();
        if (index !== -1) {
            viewDataToPassUp.splice(index, 1, state.futureArray);
        }
        else {
            viewDataToPassUp.push(state.futureArray);
        }
        state = {
            currentArray: this.viewData,
            futureArray: viewDataToPassUp
        };
        this.passViewDataHigher.emit(state);
    };
    BeautyDataComponent.prototype.handleClickToEdit = function (event) {
        if (this.viewData[0].length === 1)
            return;
        event.stopPropagation();
        var data = this.viewData;
        if (data[0] === 'range' || data[0] === 'group' || data[0] === 'quantifier'
            || data[0] === 'anchor' || data[0] === 'anchorOpposite') {
            this.quantifierService.click(true);
            var state = new __WEBPACK_IMPORTED_MODULE_3__state_model__["a" /* State */]();
            state.currentArray = data;
            state.futureArray = data.slice();
            state.futureArray.unshift('edit');
            this.elementService.elementToEditClicked(true);
            this.passViewDataHigher.emit(state);
            this.passSelectedElementPosition.emit(this.currentElementPosition);
        }
    };
    BeautyDataComponent.prototype.handleMouseDown = function (event) {
        // event.stopPropagation();
        // // event.preventDefault();
        //
        // this.hovered = false;
        //
        // let data = this.viewData;
        // this.selectionService.setStart(data);
    };
    BeautyDataComponent.prototype.handleMouseUp = function (event) {
        // event.stopPropagation();
        // // event.preventDefault();
        // let data = this.viewData;
        // this.selectionService.setEnd(data);
    };
    BeautyDataComponent.prototype.handleMouseEnterForSelection = function (event) {
        if (this.selectionService.getStart()) {
            this.hovered = false;
        }
        // this.selectionService.handleSelectionMoving(this.viewData);
    };
    BeautyDataComponent.prototype.addElementToElementsPosition = function (element) {
        this.allElPosService.addElementToElementsPosition(element);
    };
    BeautyDataComponent.prototype.deleteElementToElementsPosition = function (element) {
        this.allElPosService.deleteElementFromElementsPosition(element);
    };
    BeautyDataComponent.prototype.preventDefault = function (event) {
        event.preventDefault();
    };
    return BeautyDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], BeautyDataComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], BeautyDataComponent.prototype, "parentData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], BeautyDataComponent.prototype, "passViewDataHigher", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], BeautyDataComponent.prototype, "toggleGlobalQuantClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], BeautyDataComponent.prototype, "hideParentQuantifier", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], BeautyDataComponent.prototype, "passSelectedElementPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('element'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], BeautyDataComponent.prototype, "element", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('currEl'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object)
], BeautyDataComponent.prototype, "currEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('quantifierSpace'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object)
], BeautyDataComponent.prototype, "quantifierSpace", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], BeautyDataComponent.prototype, "hideAllQuantifiers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BeautyDataComponent.prototype, "handleMouseMove", null);
BeautyDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'beauty-data',
        template: __webpack_require__(192),
        styles: [__webpack_require__(174)],
        providers: [__WEBPACK_IMPORTED_MODULE_7__quantifier_notification_service__["a" /* NotificationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__quantifier_quantifier_service__["a" /* QuantifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__quantifier_quantifier_service__["a" /* QuantifierService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__selection_service__["a" /* SelectionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__quantifier_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__quantifier_notification_service__["a" /* NotificationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__caret_service__["a" /* CaretService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__caret_service__["a" /* CaretService */]) === "function" && _j || Object])
], BeautyDataComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=beauty-data.component.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantifierData_model__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantifier_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantifierComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuantifierComponent = (function () {
    function QuantifierComponent(elementService, quantifierService, notificationService, dataArrayService) {
        this.elementService = elementService;
        this.quantifierService = quantifierService;
        this.notificationService = notificationService;
        this.dataArrayService = dataArrayService;
        this.hovered = true;
        this.clicked = false;
        this.quantData = [];
        this.cssClass = '';
        this.quantifierData = __WEBPACK_IMPORTED_MODULE_2__quantifierData_model__["a" /* QUANTIFIERDATA */];
        this.changeExistEl = false; //if this element is compiled from some data and changed
        this.sendDataToGlobalArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.globalQuantifierClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    QuantifierComponent.prototype.ngOnInit = function () {
    };
    QuantifierComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.changeExistEl && this.viewData && !this.editable && this.previousEditableState) {
            setTimeout(function () {
                _this.notificationService.globalQuantifierClicked.emit({ show: false, quantifier: null });
                _this.elementService.elementToEditClicked(false);
                _this.quantifierService.click(false);
                _this.dataArrayService.informTextInpCompToRecompileDataFromViewData('quantifier');
            }, 0);
        }
        this.previousEditableState = this.editable;
    };
    QuantifierComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.viewData) {
            return;
        }
        if (this.dataToEdit) {
            this.elementService.elementToEditClicked(false);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('quantifier');
            return;
        }
        if (this.quantData.length > 0) {
            setTimeout(function () {
                _this.elementService.elementClicked(undefined);
                _this.elementService.displayNoMainEl({ show: true, hint: '' });
                _this.dataArrayService.informTextInpCompToRecompileDataFromViewData('lateBufferDataChange');
            }, 0);
        }
        if (this.clicked) {
            setTimeout(function () {
                _this.quantifierService.click(false);
                _this.quantData = _this.quantifierService.getQuantifier();
                if (_this.quantData.length === 0) {
                    _this.notificationService.globalQuantifierClicked.emit({ show: false, quantifier: null });
                }
                else {
                    _this.notificationService.globalQuantifierClicked.emit({ show: false, quantifier: _this.quantData.slice() });
                }
            }, 0);
        }
        //if (this.quantData.length > 0) {
        //  this.sendDataToGlobalArray.emit(this.quantData.slice());
        //}
    };
    QuantifierComponent.prototype.setStartEndRange = function (quantifierId, start, end) {
        var sendThisData = [];
        sendThisData.unshift('quantifier');
        if (start > end) {
            end = start;
            this.endRange = start;
        }
        if (quantifierId === 3) {
            this.selectedQuantifier.name = start.toString();
            this.selectedQuantifier.regExp = '{' + start + '}';
            sendThisData.push(start.toString());
        }
        if (quantifierId === 4) {
            this.selectedQuantifier.name = start + '-∞';
            this.selectedQuantifier.regExp = '{' + start + ',}';
            sendThisData.push(start.toString(), '-', '∞');
        }
        if (quantifierId === 5) {
            this.selectedQuantifier.name = start + '-' + end;
            this.selectedQuantifier.regExp = '{' + start + ',' + end + '}';
            sendThisData.push(start.toString(), '-', end.toString());
        }
        this.quantifierService.setQuantifier(sendThisData);
        this.quantData = sendThisData;
        if (this.dataToEdit) {
            for (var i = 1; i < this.quantData.length; i++) {
                this.dataToEdit[i] = this.quantData[i];
            }
        }
        if (this.viewData) {
            (_a = this.viewData).splice.apply(_a, [1, Number.MAX_VALUE].concat((this.quantData.slice(1))));
        }
        var _a;
    };
    QuantifierComponent.prototype.handleHoverGlobal = function (show) {
        if (this.cssClass === 'clicked' && show === false) {
            show = true;
        }
        var hint;
        if (show === true) {
            if (this.viewData) {
                hint = 'Double click to edit quantifier.';
            }
            else {
                hint = 'Click to add quantifier, specify preceding token matches quantity.';
            }
        }
        else {
            hint = '';
        }
        this.elementService.displayNoMainEl({ show: true, hint: hint });
    };
    QuantifierComponent.prototype.handleClickOnHovered = function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (this.viewData) {
            return;
        }
        if (!this.clicked) {
            this.cssClass = 'clicked';
            this.clicked = true;
            this.quantifierService.click(true);
            this.globalQuantifierClicked.emit({ show: true, quantifier: null });
            this.elementService.displayNoMainEl({ show: false, hint: '' });
        }
    };
    QuantifierComponent.prototype.handleDoubleClick = function (event) {
        if (!this.viewData) {
            return;
        }
        this.changeExistEl = true;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (!this.clicked) {
            this.cssClass = 'clicked';
            this.clicked = true;
            this.quantifierService.click(true);
            this.elementService.elementToEditClicked(true);
            this.notificationService.globalQuantifierClicked.emit({ show: true, quantifier: null });
            this.elementService.displayNoMainEl({ show: false, hint: '' });
        }
    };
    QuantifierComponent.prototype.handleQuantifierDataClick = function (event, datum) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.selectedQuantifier = { name: '', regExp: '' };
        this.startRange = 0;
        this.endRange = 1;
        this.selectedQuantifierId = datum.id;
        if (datum.regExp) {
            this.selectedQuantifier.name = datum.name;
            this.selectedQuantifier.regExp = datum.regExp;
        }
        else {
            this.setStartEndRange(this.selectedQuantifierId, this.startRange, this.endRange);
        }
        if (this.selectedQuantifier) {
            var data = this.selectedQuantifier.name;
            if (data) {
                var sendThisData = data.split('');
                sendThisData.unshift('quantifier');
                this.quantifierService.setQuantifier(sendThisData);
                this.quantData = sendThisData;
                if (this.dataToEdit) {
                    for (var i = 1; i < this.quantData.length; i++) {
                        this.dataToEdit[i] = [this.quantData[i]];
                    }
                    this.dataToEdit.length = this.quantData.length;
                }
            }
        }
        if (this.viewData) {
            (_a = this.viewData).splice.apply(_a, [1, Number.MAX_VALUE].concat((this.quantData.slice(1))));
        }
        var _a;
    };
    QuantifierComponent.prototype.eventStopPropagation = function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
    };
    QuantifierComponent.prototype.preventDefault = function (event) {
        event.preventDefault();
    };
    QuantifierComponent.prototype.increaseValue = function (element, dependEl) {
        var oldValue = parseFloat(element.value);
        if (oldValue >= parseFloat(element.max)) {
            var newVal = oldValue;
        }
        else {
            var newVal = oldValue + 1;
        }
        element.value = newVal;
        var event = new Event('change', { bubbles: true });
        element.dispatchEvent(event);
        if (dependEl) {
            var dependVal = parseFloat(dependEl.value);
            if (newVal > dependVal) {
                dependEl.value = newVal;
                dependEl.dispatchEvent(event);
            }
        }
    };
    QuantifierComponent.prototype.decreaseValue = function (element, dependEl) {
        var oldValue = parseFloat(element.value);
        if (oldValue <= parseFloat(element.min)) {
            var newVal = oldValue;
        }
        else {
            var newVal = oldValue - 1;
        }
        element.value = newVal;
        var event = new Event('change', { bubbles: true });
        element.dispatchEvent(event);
    };
    return QuantifierComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], QuantifierComponent.prototype, "sendDataToGlobalArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], QuantifierComponent.prototype, "globalQuantifierClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], QuantifierComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], QuantifierComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Boolean)
], QuantifierComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Boolean)
], QuantifierComponent.prototype, "highlightSelectionBackground", void 0);
QuantifierComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'quantifier',
        template: __webpack_require__(193),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__quantifier_service__["a" /* QuantifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__quantifier_service__["a" /* QuantifierService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _d || Object])
], QuantifierComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=quantifier.component.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QUANTIFIERDATA; });
/* unused harmony export QuantifierData */
var QUANTIFIERDATA = [
    {
        id: 0,
        name: '0-1',
        regExp: '?',
        hint: 'It will match 0 or 1 of the preceeding token.'
    },
    {
        id: 1,
        name: '0-∞',
        regExp: '*',
        hint: 'It will match 0 or more of the preceeding token.'
    },
    {
        id: 2,
        name: '1-∞',
        regExp: '+',
        hint: 'It will match 1 or more of the preceeding token.'
    },
    {
        id: 3,
        name: 'X',
        regExp: '',
        hint: 'It will exactly X of the preceeding token.'
    },
    {
        id: 4,
        name: 'X-∞',
        regExp: '',
        hint: 'It will match X or more of the preceeding token.'
    },
    {
        id: 5,
        name: 'X-Y',
        regExp: '',
        hint: 'It will match from X to Y of the preceeding token.'
    },
];
var QuantifierData = (function () {
    function QuantifierData() {
    }
    return QuantifierData;
}());

//# sourceMappingURL=quantifierData.model.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantifier_notification_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeBeautyDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RangeBeautyDataComponent = (function () {
    function RangeBeautyDataComponent(elementService) {
        var _this = this;
        this.elementService = elementService;
        this.hovered = false;
        this.elementService.getRangeData().then(function (rangeData) {
            if (_this.viewData[_this.viewData.length - 1][0] === 'quantifier') {
                _this.viewData.pop();
            }
            _this.rangeData = rangeData;
            _this.showData = _this.splitDataOnCategories(_this.viewData.slice(), _this.rangeData.categories);
            if (_this.countViewDataLength(_this.viewData) > 50) {
                var viewDataShort = _this.cutDataWithNumberOfSymbols(_this.viewData, 50);
                var viewDataHidden = _this.cutDataWithNumberOfSymbolsReverse(_this.viewData, 50);
                _this.showDataHidden = _this.transformRangeToViewDataMode(viewDataHidden);
                _this.showDataShort = _this.splitDataOnCategories(viewDataShort, _this.rangeData.categories);
                _this.showDataShort.push(['...']);
            }
        });
    }
    RangeBeautyDataComponent.prototype.handleMouseEnter = function () {
        this.hovered = true;
    };
    RangeBeautyDataComponent.prototype.handleMouseLeave = function () {
        this.hovered = false;
    };
    RangeBeautyDataComponent.prototype.preventDefault = function (event) {
        event.preventDefault();
    };
    RangeBeautyDataComponent.prototype.isObject = function (data) {
        return typeof data === 'object';
    };
    RangeBeautyDataComponent.prototype.countViewDataLength = function (data) {
        var newData = data.slice();
        var result = 0;
        for (var i = 0; i < newData.length; i++) {
            result += newData[i].length;
        }
        return result;
    };
    RangeBeautyDataComponent.prototype.cutDataWithNumberOfSymbols = function (data, number) {
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            number -= data[i].length;
            if (number < 0) {
                break;
            }
            newData.push(data[i]);
        }
        return newData;
    };
    RangeBeautyDataComponent.prototype.cutDataWithNumberOfSymbolsReverse = function (data, number) {
        var newData = [];
        for (var i = 0; i < data.length; i++) {
            number -= data[i].length;
            if (number >= 0) {
                continue;
            }
            newData.push(data[i]);
        }
        return newData;
    };
    RangeBeautyDataComponent.prototype.splitDataOnCategories = function (data, categories) {
        var newData = data.slice();
        newData = this.isolateArrayElWithTemplate(newData, this.rangeData.categories.presets);
        newData = this.isolateArrayElWithTemplate(newData, this.rangeData.categories.controlCharacters);
        newData = this.groupArrayWithTemplate(newData, this.rangeData.categories.punctuation);
        newData = this.groupArrayWithTemplate(newData, this.rangeData.categories.smallAlphabet);
        newData = this.groupArrayWithTemplate(newData, this.rangeData.categories.bigAlphabet);
        newData = this.groupArrayWithTemplate(newData, this.rangeData.categories.numbers);
        newData = this.groupArrayWithTemplate(newData, this.rangeData.categories.unicode);
        newData = this.groupArrayWithTemplate(newData, this.rangeData.categories.extended);
        newData = this.groupRangesInArray(newData, '-');
        newData = this.transformRangeToViewDataMode(newData);
        return newData;
    };
    RangeBeautyDataComponent.prototype.transformRangeToViewDataMode = function (arrayToTransform) {
        var result = [];
        for (var i = 0; i < arrayToTransform.length; i++) {
            if (typeof arrayToTransform[i] === 'object') {
                result.push(this.transformRangeToViewDataMode(arrayToTransform[i]));
            }
            else {
                result.push(this.transformSymbol(arrayToTransform[i]));
            }
        }
        return result;
    };
    RangeBeautyDataComponent.prototype.transformSymbol = function (entrySymbol) {
        for (var i = 0; i < this.rangeData.topLeft.length; i++) {
            if (this.rangeData.topLeft[i].nameForRegExp === entrySymbol) {
                return this.rangeData.topLeft[i].name;
            }
        }
        var separatorIndex = entrySymbol.indexOf('-');
        if (separatorIndex !== -1 && entrySymbol.length > 2) {
            var firstChar = entrySymbol.substring(0, separatorIndex);
            var lastChar = entrySymbol.substring(separatorIndex + 1);
            return this.transformSymbol(firstChar) + '..' + this.transformSymbol(lastChar);
        }
        for (var i = 0; i < this.rangeData.ASCII.length; i++) {
            if (this.rangeData.ASCII[i].nameForRegExp === entrySymbol) {
                return this.rangeData.ASCII[i].name;
            }
        }
        return entrySymbol;
    };
    RangeBeautyDataComponent.prototype.isolateArrayElWithTemplate = function (arrayToIsolate, template) {
        var arrayToIsolateCopy = [];
        for (var i = 0; i < arrayToIsolate.length; i++) {
            if (template.indexOf(arrayToIsolate[i]) !== -1) {
                arrayToIsolateCopy.push([arrayToIsolate[i]]);
                continue;
            }
            arrayToIsolateCopy.push(arrayToIsolate[i]);
        }
        return arrayToIsolateCopy;
    };
    RangeBeautyDataComponent.prototype.groupRangesInArray = function (arrayToGroup, separator) {
        var arrayToGroupCopy = [];
        for (var i = 0; i < arrayToGroup.length; i++) {
            if (typeof arrayToGroup[i] === 'string' && arrayToGroup[i].indexOf(separator) !== -1) {
                arrayToGroupCopy.push([arrayToGroup[i]]);
                continue;
            }
            arrayToGroupCopy.push(arrayToGroup[i]);
        }
        return arrayToGroupCopy;
    };
    RangeBeautyDataComponent.prototype.groupArrayWithTemplate = function (arrayToGroup, template) {
        var arrayToGroupCopy = [];
        var endGroupIndex;
        for (var i = 0; i < arrayToGroup.length; i++) {
            var templateIndex = template.indexOf(arrayToGroup[i]);
            if (templateIndex === -1) {
                arrayToGroupCopy.push(arrayToGroup[i]);
                continue;
            }
            endGroupIndex = i;
            while (arrayToGroup[endGroupIndex + 1] && template.indexOf(arrayToGroup[endGroupIndex + 1]) !== -1) {
                templateIndex++;
                endGroupIndex++;
            }
            arrayToGroupCopy.push(arrayToGroup.slice(i, endGroupIndex + 1));
            i = endGroupIndex;
        }
        return arrayToGroupCopy;
    };
    return RangeBeautyDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], RangeBeautyDataComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], RangeBeautyDataComponent.prototype, "class", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RangeBeautyDataComponent.prototype, "handleMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RangeBeautyDataComponent.prototype, "handleMouseLeave", null);
RangeBeautyDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'range-beauty-data',
        template: __webpack_require__(194),
        styles: [__webpack_require__(176)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__quantifier_notification_service__["a" /* NotificationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _a || Object])
], RangeBeautyDataComponent);

var _a;
//# sourceMappingURL=range-beauty-data.component.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__element_position_model__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedElementViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectedElementViewComponent = (function () {
    function SelectedElementViewComponent() {
        this.passSelectedElementPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    SelectedElementViewComponent.prototype.ngOnInit = function () { };
    SelectedElementViewComponent.prototype.ngAfterViewInit = function () {
        this.currentElementPosition = new __WEBPACK_IMPORTED_MODULE_1__element_position_model__["a" /* ElementPosition */]();
        var clientCoords = this.element.nativeElement.getBoundingClientRect();
        var top = clientCoords.top;
        var left = clientCoords.left;
        var width = clientCoords.right - clientCoords.left;
        var height = clientCoords.bottom - clientCoords.top;
        this.currentElementPosition.position = new __WEBPACK_IMPORTED_MODULE_1__element_position_model__["b" /* Position */](top, left, width, height);
        this.passSelectedElementPosition.emit(this.currentElementPosition);
    };
    SelectedElementViewComponent.prototype.stopPropagation = function (event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
    };
    return SelectedElementViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], SelectedElementViewComponent.prototype, "elementName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], SelectedElementViewComponent.prototype, "passSelectedElementPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('element'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], SelectedElementViewComponent.prototype, "element", void 0);
SelectedElementViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'selected-element-view',
        template: __webpack_require__(195),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], SelectedElementViewComponent);

var _a;
//# sourceMappingURL=selected-element-view.component.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
var State = (function () {
    function State() {
    }
    return State;
}());

//# sourceMappingURL=state.model.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BufferService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MAXBUFFERSIZE = 10;
var BufferService = (function () {
    function BufferService() {
        this.data = [];
        this.currentIndex = -1;
    }
    BufferService.prototype.add = function (dataToAdd) {
        //if we add data to the middle of array
        if (this.data[this.currentIndex + 1]) {
            this.data = this.data.slice(0, this.currentIndex + 1);
            this.data.push(dataToAdd);
            this.currentIndex++;
            return;
        }
        this.data.push(dataToAdd);
        this.currentIndex++;
        if (this.data.length >= MAXBUFFERSIZE) {
            this.data = this.data.slice(-MAXBUFFERSIZE);
            this.currentIndex = MAXBUFFERSIZE - 1;
        }
    };
    BufferService.prototype.moveAhead = function () {
        if (this.data[this.currentIndex + 1]) {
            this.currentIndex++;
            return this.createFullCopyOfArray(this.data[this.currentIndex]);
        }
        else {
            return null;
        }
    };
    BufferService.prototype.moveBehind = function () {
        if (this.data[this.currentIndex - 1]) {
            this.currentIndex--;
            return this.createFullCopyOfArray(this.data[this.currentIndex]);
        }
        else {
            return null;
        }
    };
    BufferService.prototype.createFullCopyOfArray = function (array) {
        var newArray = [];
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (typeof array[i] === 'object') {
                newArray.push(this.createFullCopyOfArray(array[i]));
            }
            else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    };
    return BufferService;
}());
BufferService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], BufferService);

//# sourceMappingURL=buffer.service.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaretComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CaretComponent = (function () {
    function CaretComponent() {
    }
    CaretComponent.prototype.ngOnInit = function () { };
    return CaretComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('caret'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], CaretComponent.prototype, "caret", void 0);
CaretComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'caret',
        template: __webpack_require__(196),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], CaretComponent);

var _a;
//# sourceMappingURL=caret.component.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__caret_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadRegExpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadRegExpComponent = (function () {
    function ReadRegExpComponent(dataArrayService, caretServise) {
        this.dataArrayService = dataArrayService;
        this.caretServise = caretServise;
        this.editWindowShow = false;
    }
    ReadRegExpComponent.prototype.handleMouseDown = function (event) {
        this.caretServise.stopBlinking();
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleMouseUp = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleMouseMove = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleKeyDown = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.handleKeyPress = function (event) {
        event.stopPropagation();
    };
    ReadRegExpComponent.prototype.submitData = function (data) {
        // RegExp check by default js parser
        try {
            // This may cause an error
            new RegExp(data);
            // Custom RegExp check
            if (this.checkDataForEmptyBrackets(data)) {
                this.showErrMsg('Empty brackets detected!');
                return;
            }
            var parsedData = this.parseStringToData(data);
            if (!this.checkDataForBracketBalance(parsedData)) {
                this.showErrMsg('Incorrect brackets usage!');
                return;
            }
            // Setting new RegExp
            this.text.nativeElement.value = '';
            this.dataArrayService.setData(parsedData);
            this.closeErrMsg();
        }
        catch (e) {
            // Error message
            var msg = e.message;
            var msgShort = msg.substring(msg.lastIndexOf(': ') + 2);
            this.showErrMsg(msgShort);
        }
    };
    ReadRegExpComponent.prototype.showErrMsg = function (message) {
        this.errTxt.nativeElement.innerHTML = message;
        this.errMsg.nativeElement.style.display = 'block';
    };
    ReadRegExpComponent.prototype.closeErrMsg = function () {
        this.errMsg.nativeElement.style.display = 'none';
    };
    ReadRegExpComponent.prototype.parseStringToData = function (str) {
        var data = [];
        for (var i = 0; i < str.length; i++) {
            data.push(str[i]);
        }
        //handling escape characters
        for (var i = 0; i < data.length; i++) {
            if (data[i] === '\\') {
                data.splice(i, 2, data[i] + data[i + 1]);
            }
        }
        // handling symbols like \x00 in ranges
        var balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '[':
                    balance++;
                    break;
                case ']':
                    balance--;
                    break;
            }
            if (balance === 1 && data[i] === '\\x' && data[i + 1] && data[i + 2]) {
                data.splice(i, 3, data[i] + data[i + 1] + data[i + 2]);
            }
        }
        // handling '-' in ranges
        balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '[':
                    balance++;
                    break;
                case ']':
                    balance--;
                    break;
            }
            if (balance === 1 && data[i] === '-' && data[i + 1] && data[i - 1] && data[i - 1] !== '[' && data[i + 1] !== ']') {
                data.splice(i - 1, 3, data[i - 1] + data[i] + data[i + 1]);
                i--;
            }
        }
        return data;
    };
    ReadRegExpComponent.prototype.checkDataForEmptyBrackets = function (data) {
        return data.indexOf('{}') !== -1 || data.indexOf('[]') !== -1 || data.indexOf('()') !== -1;
    };
    ReadRegExpComponent.prototype.checkDataForBracketBalance = function (data) {
        // check for round brackets
        var balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '(':
                    balance++;
                    break;
                case ')':
                    balance--;
                    break;
                default: continue;
            }
            if (balance < 0) {
                return false;
            }
        }
        if (balance !== 0) {
            return false;
        }
        // check for square brackets
        balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '[':
                    balance++;
                    break;
                case ']':
                    balance--;
                    break;
            }
            if (balance < 0 || balance > 1) {
                return false;
            }
            if (balance === 1 && (data[i] === '(' || data[i] === ')' || data[i] === '{' || data[i] === '}')) {
                return false;
            }
        }
        if (balance !== 0) {
            return false;
        }
        // check for curly brackets
        balance = 0;
        for (var i = 0; i < data.length; i++) {
            switch (data[i]) {
                case '{':
                    balance++;
                    break;
                case '}':
                    balance--;
                    break;
            }
            if (balance < 0 || balance > 1) {
                return false;
            }
            if (balance === 1 && (data[i] === '(' || data[i] === ')' || data[i] === '[' || data[i] === ']')) {
                return false;
            }
        }
        if (balance !== 0) {
            return false;
        }
        return true;
    };
    ReadRegExpComponent.prototype.copyDataToTextArea = function () {
        var data = this.dataArrayService.getData().join('');
        if (data === '') {
            this.showErrMsg('Nothing to copy!');
        }
        else {
            this.text.nativeElement.value = data;
        }
    };
    ReadRegExpComponent.prototype.toggleEditWindow = function () {
        this.editWindowShow = !this.editWindowShow;
        if (!this.editWindowShow) {
            this.closeErrMsg();
        }
    };
    return ReadRegExpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('text'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], ReadRegExpComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('errTxt'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object)
], ReadRegExpComponent.prototype, "errTxt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('errMsg'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object)
], ReadRegExpComponent.prototype, "errMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleMouseUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleKeyDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReadRegExpComponent.prototype, "handleKeyPress", null);
ReadRegExpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'read-reg-exp',
        template: __webpack_require__(197),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__caret_service__["a" /* CaretService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__caret_service__["a" /* CaretService */]) === "function" && _e || Object])
], ReadRegExpComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=read-reg-exp.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_elements_position_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beauty_data_beauty_data_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnchorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnchorsComponent = (function () {
    function AnchorsComponent(dataArrayService, elementService, beautyDataService, allElPosService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.anchorsObj = new __WEBPACK_IMPORTED_MODULE_3__elements_element_model__["a" /* Element */]();
        this.hasCreated = false;
        this.hasEdited = false;
    }
    AnchorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalData = this.dataArrayService.getData();
        this.parent = this.allElPosService.getInputFromKeyboard();
        this.elementService.getElement(5).then(function (element) { return _this.anchorsObj = element; });
    };
    AnchorsComponent.prototype.ngOnDestroy = function () {
        if (this.hasCreated) {
            this.allElPosService.setInputFromKeyboardIndex(this.parent.index + 1);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
            return;
        }
        if (this.hasEdited) {
            this.elementService.elementToEditClicked(false);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
            return;
        }
        if (this.dataToEdit) {
            return;
        }
        if (this.parent.direction === 'left') {
            this.parent.parent.splice(this.parent.index, 1);
        }
        if (this.parent.direction === 'right') {
            this.parent.parent.splice(this.parent.index + 1, 1);
        }
    };
    AnchorsComponent.prototype.handleAnchor = function (datum) {
        if (!this.dataToEdit) {
            var data = [datum.regExp];
            var parent = this.allElPosService.getInputFromKeyboard();
            if (!parent) {
                this.globalData = this.globalData.concat(data);
                this.dataArrayService.setData(this.globalData);
            }
            else {
                var newAnchor = this.beautyDataService.compileViewDataFromData(data.slice())[0];
                if (parent.direction === 'left') {
                    parent.parent.splice(parent.index, 1, newAnchor);
                }
                if (parent.direction === 'right') {
                    parent.parent.splice(parent.index + 1, 1, newAnchor);
                }
                this.hasCreated = true;
            }
        }
        else {
            if (datum.name === 'Non-Word Boundary') {
                this.dataToEdit[0] = 'anchorOpposite';
                var elementToRestyle = document.getElementsByClassName('beautyData editing anchor')[0];
                if (elementToRestyle) {
                    elementToRestyle.classList.remove('anchor');
                    elementToRestyle.classList.add('anchorOpposite');
                }
            }
            else {
                this.dataToEdit[0] = 'anchor';
                var elementToRestyle = document.getElementsByClassName('beautyData editing anchorOpposite')[0];
                if (elementToRestyle) {
                    elementToRestyle.classList.remove('anchorOpposite');
                    elementToRestyle.classList.add('anchor');
                }
            }
            this.dataToEdit[1] = datum.symbol;
            this.hasEdited = true;
        }
    };
    AnchorsComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
    };
    return AnchorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], AnchorsComponent.prototype, "dataToEdit", void 0);
AnchorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'anchors',
        template: __webpack_require__(198),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _d || Object])
], AnchorsComponent);

var comingAnchor = (function () {
    function comingAnchor() {
        this.name = '';
        this.symbol = '';
        this.regExp = '';
    }
    return comingAnchor;
}());
var _a, _b, _c, _d;
//# sourceMappingURL=anchors.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_model__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupComponent = (function () {
    function GroupComponent(dataArrayService, elementService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.oneItem = 'Group';
        this.groupSelectedEl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.globalWrapDisable = false;
        this.groupObj = new __WEBPACK_IMPORTED_MODULE_3__elements_element_model__["a" /* Element */]();
        this.data = [];
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dataToEdit) {
            this.data = this.dataArrayService.getData();
        }
        else {
            this.data = this.dataToEdit;
        }
        this.elementService.getElement(3).then(function (element) { return _this.groupObj = element; });
        this.globalWrapDisable = this.getDataMaxDepth(this.viewData[0]) >= 5;
    };
    GroupComponent.prototype.ngAfterViewInit = function () {
        if (this.dataToEdit) {
            this.twoButtons.nativeElement.classList.add('disabled');
        }
    };
    GroupComponent.prototype.ngOnDestroy = function () {
        if (this.dataToEdit) {
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('group');
        }
        else {
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('');
        }
    };
    GroupComponent.prototype.getDataMaxDepth = function (data) {
        var maxChildDepth = 0;
        for (var i = 0; i < data.length; i++) {
            if (typeof (data[i]) === "object" && data[i][0] === "group") {
                var tmp = this.getDataMaxDepth(data[i]);
                if (maxChildDepth < tmp) {
                    maxChildDepth = tmp;
                }
            }
        }
        return maxChildDepth + 1;
    };
    GroupComponent.prototype.handleGroup = function (name) {
        if (!this.dataToEdit) {
            var data = this.data;
            if (name === 'Capture') {
                if (this.globalWrapDisable) {
                    return;
                }
                data.unshift('(');
                data.push(')');
            }
            else {
                var groupExist = false;
                for (var i_1 = 0; i_1 < data.length; i_1++) {
                    if (data[i_1] === '(' && data[i_1 - 1] !== '\\') {
                        groupExist = true;
                        data.splice(i_1, 1);
                        break;
                    }
                }
                if (groupExist) {
                    for (var i_2 = data.length; i_2 >= 0; i_2--) {
                        if (data[i_2] === ')' && data[i_2 - 1] !== '\\') {
                            data.splice(i_2, 1);
                            break;
                        }
                    }
                }
            }
            this.setData(data);
        }
        else {
            var pathToData = [];
            this.getPathToElement(this.viewData, this.data, pathToData);
            if (name === 'Capture' && this.data[0] !== 'group') {
                this.data.unshift('group');
                this.twoButtons.nativeElement.classList.add('disabled');
                this.twoButtons.nativeElement.classList.remove('disabledLast');
            }
            else if (name === 'Non-capture' && this.data[0] === 'group') {
                this.data.shift();
                this.twoButtons.nativeElement.classList.remove('disabled');
                this.twoButtons.nativeElement.classList.add('disabledLast');
                // check for quantifier
                if (this.data[this.data.length - 1][0] === 'quantifier') {
                    this.data.pop();
                }
            }
            else {
                return;
            }
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('group');
            var newData = this.viewData;
            for (var i = pathToData.length - 1; i >= 1; i--) {
                newData = newData[pathToData[i]];
            }
            if (name === 'Non-capture') {
                newData.splice(pathToData[0] + 1, this.data.length - 1);
            }
            newData[pathToData[0]] = this.data;
        }
        this.globalWrapDisable = this.getDataMaxDepth(this.viewData[0]) >= 5;
    };
    GroupComponent.prototype.getPathToElement = function (array, element, path) {
        if (array === element) {
            return true;
        }
        if (array instanceof Array) {
            var exists = false;
            for (var i = 0; i < array.length; i++) {
                exists = exists || this.getPathToElement(array[i], element, path);
                if (exists) {
                    path.push(i);
                    break;
                }
            }
            return exists;
        }
        return false;
    };
    GroupComponent.prototype.setData = function (data) {
        this.dataArrayService.setData(data);
    };
    GroupComponent.prototype.changeItemToOpposite = function (event) {
        if (this.disabled) {
            return;
        }
        event.stopPropagation();
        if (this.oneItem === 'Group') {
            this.oneItem = 'Ungroup';
        }
        else {
            this.oneItem = 'Group';
        }
        this.groupSelectedEl.emit(this.oneItem);
    };
    GroupComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    return GroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('twoButtons'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], GroupComponent.prototype, "twoButtons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], GroupComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Boolean)
], GroupComponent.prototype, "showOneItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], GroupComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Boolean)
], GroupComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _b || Object)
], GroupComponent.prototype, "groupSelectedEl", void 0);
GroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'group',
        template: __webpack_require__(199),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */]) === "function" && _d || Object])
], GroupComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=group.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return comingLookaround; });
var comingLookaround = (function () {
    function comingLookaround() {
        this.name = '';
        this.regExp = '';
    }
    return comingLookaround;
}());

//# sourceMappingURL=coming-lookaround.model.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_element_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lookaround_model__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beauty_data_beauty_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_elements_position_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LookaroundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LookaroundComponent = (function () {
    function LookaroundComponent(dataArrayService, elementService, beautyDataService, allElPosService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.lookaround = new __WEBPACK_IMPORTED_MODULE_4__lookaround_model__["a" /* Lookaround */]();
        this.lookaroundObj = new __WEBPACK_IMPORTED_MODULE_2__elements_element_model__["a" /* Element */]();
    }
    LookaroundComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dataToEdit) {
            this.globalData = this.dataArrayService.getData();
        }
        else {
            this.initEdit();
            this.globalData = this.dataToEdit;
        }
        this.elementService.getElement(4).then(function (element) { return _this.lookaroundObj = element; });
        this.parent = this.allElPosService.getInputFromKeyboard();
    };
    LookaroundComponent.prototype.ngOnDestroy = function () {
        this.elementService.elementToEditClicked(false);
        if (this.dataToEdit) {
            return;
        }
        if (this.parent.parent.length === 1) {
            if (this.parent.parent[0][0] === 'main-element') {
                this.parent.parent.splice(0, 1);
                return;
            }
        }
        if (this.parent.direction === 'left') {
            if (this.parent.parent[this.parent.index] && this.parent.parent[this.parent.index][0] === 'main-element') {
                this.parent.parent.splice(this.parent.index, 1);
                this.parent.index--;
            }
        }
        if (this.parent.direction === 'right') {
            if (this.parent.parent[this.parent.index + 1] && this.parent.parent[this.parent.index + 1][0] === 'main-element') {
                this.parent.parent.splice(this.parent.index + 1, 1);
                this.parent.index--;
            }
        }
        this.allElPosService.setInputFromKeyboardIndex(this.parent.index + 1);
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
    };
    LookaroundComponent.prototype.initEdit = function () {
        this.lookaround.lALB.name = this.dataToEdit[1].split(' ')[1];
        this.lookaround.posNeg.name = this.dataToEdit[1].split(' ')[2];
        if (this.lookaround.posNeg.name === 'positive') {
            this.lookaround.posNeg.name = 'Positive';
        }
        else {
            this.lookaround.posNeg.name = 'Negative';
        }
        if (this.lookaround.lALB.name === 'lookAhead') {
            this.lookaround.lALB.name = 'Look ahead';
        }
        else {
            this.lookaround.lALB.name = 'Look behind';
        }
    };
    LookaroundComponent.prototype.handleLookaround = function (datum) {
        if (datum.name === 'Positive' || datum.name === 'Negative') {
            this.checkForLookaround('posNeg', datum);
        }
        else {
            this.checkForLookaround('lALB', datum);
        }
    };
    LookaroundComponent.prototype.checkForLookaround = function (lookName, datum) {
        if (this.lookaround[lookName].name === datum.name) {
            this.lookaround[lookName].name = '';
            this.lookaround[lookName].regExp = '';
        }
        else {
            this.lookaround[lookName].name = datum.name;
            this.lookaround[lookName].regExp = datum.regExp;
        }
    };
    LookaroundComponent.prototype.addLookaround = function () {
        if (this.lookaround.posNeg.name && this.lookaround.lALB.name) {
            this.fullLookaround = this.lookaround.lALB.regExp + this.lookaround.posNeg.regExp;
            var data = ['(', this.fullLookaround, ['_'], ')'];
            var newLookaround = this.beautyDataService.compileViewDataFromData(data.slice())[0];
            var parent = this.parent;
            if (parent.direction === 'left') {
                parent.parent.splice(parent.index, 1, newLookaround);
            }
            if (parent.direction === 'right') {
                parent.parent.splice(parent.index + 1, 1, newLookaround);
            }
            //check for empty lookaround above us
            for (var i = 0; i < parent.parent.length; i++) {
                if (parent.parent[i][0] === '_' && parent.parent[1] && parent.parent[1].indexOf('look') !== -1) {
                    parent.parent.splice(i, 1);
                    break;
                }
            }
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('addLookaround');
            this.close.emit();
        }
    };
    LookaroundComponent.prototype.editLookaround = function () {
        var pathToData = [];
        this.getPathToElement(this.viewData, this.dataToEdit, pathToData);
        var lALBStringName = ' ' + this.lookaround.lALB.name[0].toLowerCase() + this.lookaround.lALB.name.slice(1, 4) + this.lookaround.lALB.name[5].toUpperCase()
            + this.lookaround.lALB.name.slice(6, this.lookaround.lALB.name.length);
        var posNegName = this.lookaround.posNeg.name.toLowerCase();
        var totalName = lALBStringName + ' ' + posNegName;
        var data = this.dataToEdit;
        data[1] = totalName;
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('changeLookaround');
        var newData = this.viewData;
        for (var i = pathToData.length - 1; i >= 1; i--) {
            newData = newData[pathToData[i]];
        }
        newData[pathToData[0]] = this.dataToEdit;
    };
    LookaroundComponent.prototype.deleteLookaround = function () {
        this.close.emit();
        var data = this.dataToEdit;
        data.length = 0;
        this.elementService.elementToEditClicked(false);
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('deleteLookaround');
    };
    LookaroundComponent.prototype.getPathToElement = function (array, element, path) {
        if (array === element) {
            return true;
        }
        if (array instanceof Array) {
            var exists = false;
            for (var i = 0; i < array.length; i++) {
                exists = exists || this.getPathToElement(array[i], element, path);
                if (exists) {
                    path.push(i);
                    break;
                }
            }
            return exists;
        }
        return false;
    };
    return LookaroundComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], LookaroundComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], LookaroundComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], LookaroundComponent.prototype, "close", void 0);
LookaroundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'lookaround',
        template: __webpack_require__(200),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _d || Object])
], LookaroundComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=lookaround.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coming_lookaround_model__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lookaround; });

var Lookaround = (function () {
    function Lookaround() {
        this.lALB = new __WEBPACK_IMPORTED_MODULE_0__coming_lookaround_model__["a" /* comingLookaround */]();
        this.posNeg = new __WEBPACK_IMPORTED_MODULE_0__coming_lookaround_model__["a" /* comingLookaround */]();
    }
    return Lookaround;
}());

//# sourceMappingURL=lookaround.model.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hint_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ascii_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsciiComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsciiComponent = (function () {
    function AsciiComponent(hintService, rangeDataService, asciiService) {
        this.hintService = hintService;
        this.rangeDataService = rangeDataService;
        this.asciiService = asciiService;
        this.presetNameArray = [];
    }
    AsciiComponent.prototype.ngOnInit = function () {
        this.rangeData = this.rangeDataService.getRangeData();
        this.data = this.rangeData.ASCII;
        var staticData = this.data;
        var editData = this.dataToEdit;
        this.presetNameArray = this.rangeDataService.getPresetNameArray();
        if (editData) {
            for (var i = 0; i < editData.length; i++) {
                var presetIndex = this.presetNameArray.indexOf(editData[i]);
                if (editData[i].length > 2) {
                    this.parsePreset(editData[i], '-');
                    continue;
                }
                for (var j = 0; j < staticData.length; j++) {
                    var edit = editData[i].slice();
                    if (presetIndex >= 0 || edit === staticData[j].nameForRegExp) {
                        this.addData(editData[i]);
                        break;
                    }
                }
            }
        }
    };
    AsciiComponent.prototype.parsePreset = function (string, separator) {
        var separatorIndex = string.indexOf(separator);
        if (separatorIndex === -1) {
            this.addData(string);
            return;
        }
        var firstChar = string.substring(0, separatorIndex);
        var lastChar = string.substring(separatorIndex + 1);
        var charsToInsert = this.rangeData.categories.all
            .slice(this.rangeData.categories.all.indexOf(firstChar), this.rangeData.categories.all.indexOf(lastChar) + 1);
        for (var i = 0; i < charsToInsert.length; i++) {
            this.addData(charsToInsert[i]);
        }
    };
    AsciiComponent.prototype.ngAfterViewChecked = function () {
        this.setData(this.data);
    };
    AsciiComponent.prototype.setData = function (data) {
        this.asciiService.setData(data);
    };
    AsciiComponent.prototype.getIndexOfFirstEl = function () {
        return this.asciiService.getIndexOfFirstEl();
    };
    AsciiComponent.prototype.getIndexOfLastEl = function () {
        return this.asciiService.getIndexOfLastEl();
    };
    AsciiComponent.prototype.onMouseOver = function (hint, indexOfLastEl, event) {
        this.currentIndex = indexOfLastEl;
        this.asciiService.onMouseOver(hint, indexOfLastEl, event);
    };
    AsciiComponent.prototype.onMouseOut = function (event) {
        this.asciiService.onMouseOut(event);
    };
    AsciiComponent.prototype.addData = function (el, indexOfEl) {
        this.asciiService.addData(el, indexOfEl);
    };
    AsciiComponent.prototype.setHint = function (data) {
        this.hintService.setHint(data);
    };
    AsciiComponent.prototype.getHoveredPresets = function () {
        return this.rangeDataService.getHoveredPresets();
    };
    AsciiComponent.prototype.getPresetFullElArray = function () {
        return this.rangeDataService.getPresetFullElArray();
    };
    AsciiComponent.prototype.handleShiftDown = function (event) {
        var hint = 'You can add multiple range. Ctrl - add character, Shift - create one more range.';
        if (event.shiftKey || event.ctrlKey) {
            this.setHint(hint);
        }
        if (event.shiftKey) {
            this.asciiService.onMouseOver(hint, this.currentIndex, event);
        }
    };
    return AsciiComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], AsciiComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsciiComponent.prototype, "handleShiftDown", null);
AsciiComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'ascii',
        template: __webpack_require__(201),
        styles: [__webpack_require__(183)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ascii_service__["a" /* AsciiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ascii_service__["a" /* AsciiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ascii_service__["a" /* AsciiService */]) === "function" && _c || Object])
], AsciiComponent);

var _a, _b, _c;
//# sourceMappingURL=ascii.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosNegComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosNegComponent = (function () {
    function PosNegComponent(rangeDataService) {
        this.rangeDataService = rangeDataService;
        this.posNeg = 'Positive';
    }
    PosNegComponent.prototype.ngOnInit = function () {
        if (this.status === 'Negative') {
            this.posNeg = this.status;
        }
    };
    PosNegComponent.prototype.ngOnDestroy = function () {
        var data = this.rangeDataService.getRangeElements();
        if (this.posNeg === 'Negative' && data.length > 0) {
            data.unshift('^');
            this.rangeDataService.setRangeElements(data);
        }
        if (this.posNeg === 'Positive' && data[0] === '^') {
            data.shift();
            this.rangeDataService.setRangeElements(data);
        }
    };
    PosNegComponent.prototype.handlePosNeg = function (name) {
        this.posNeg = name;
    };
    return PosNegComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], PosNegComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], PosNegComponent.prototype, "status", void 0);
PosNegComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'pos-neg',
        template: __webpack_require__(202),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */]) === "function" && _a || Object])
], PosNegComponent);

var _a;
//# sourceMappingURL=pos-neg.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hint_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__presets_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_element_service__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresetsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PresetsComponent = (function () {
    function PresetsComponent(hintService, presetsService, elementService) {
        this.hintService = hintService;
        this.presetsService = presetsService;
        this.elementService = elementService;
    }
    PresetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.elementService.getRangeData().then(function (rangeData) {
            _this.data = rangeData.topLeft;
        });
    };
    PresetsComponent.prototype.getPresets = function () {
        return this.presetsService.getPresets();
    };
    PresetsComponent.prototype.onMouseOverPreset = function (element) {
        this.setHint(element.hint);
        this.presetsService.setHoveredPresets(element.elements);
    };
    PresetsComponent.prototype.onMouseOutPreset = function () {
        this.setHint(undefined);
        this.presetsService.setHoveredPresets([]);
    };
    PresetsComponent.prototype.setHint = function (hint) {
        this.hintService.setHint(hint);
    };
    PresetsComponent.prototype.handlePresetClick = function (element) {
        this.presetsService.handlePresetClick(element);
        this.setHint(('You can add multiple range. Ctrl - add character, Shift - create one more range.'));
    };
    return PresetsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], PresetsComponent.prototype, "dataToEdit", void 0);
PresetsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'presets',
        template: __webpack_require__(203),
        styles: [__webpack_require__(185)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__presets_service__["a" /* PresetsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hint_service__["a" /* HintService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__presets_service__["a" /* PresetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__presets_service__["a" /* PresetsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__elements_element_service__["a" /* ElementService */]) === "function" && _c || Object])
], PresetsComponent);

var _a, _b, _c;
//# sourceMappingURL=presets.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ascii_ascii_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PresetsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PresetsService = (function () {
    function PresetsService(rangeDataService, asciiService) {
        this.rangeDataService = rangeDataService;
        this.asciiService = asciiService;
    }
    PresetsService.prototype.handlePresetClick = function (element) {
        this.asciiService.addData(element.nameForRegExp);
    };
    PresetsService.prototype.setHoveredPresets = function (elements) {
        this.rangeDataService.setHoveredPresets(elements);
    };
    PresetsService.prototype.getPresets = function () {
        return this.rangeDataService.getRangePresets();
    };
    return PresetsService;
}());
PresetsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__range_data_service__["a" /* RangeDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ascii_ascii_service__["a" /* AsciiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ascii_ascii_service__["a" /* AsciiService */]) === "function" && _b || Object])
], PresetsService);

var _a, _b;
//# sourceMappingURL=presets.service.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range_data_model__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__range_array_model__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range_data_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beauty_data_beauty_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_elements_position_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__caret_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ascii_ascii_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RangeDataComponent = (function () {
    function RangeDataComponent(elementService, dataArrayService, rangeDataService, beautyDataService, allElPosService, asciiService) {
        this.elementService = elementService;
        this.dataArrayService = dataArrayService;
        this.rangeDataService = rangeDataService;
        this.beautyDataService = beautyDataService;
        this.allElPosService = allElPosService;
        this.asciiService = asciiService;
        this.rangeData = new __WEBPACK_IMPORTED_MODULE_3__range_data_model__["a" /* RangeData */]();
        this.currentRangeArray = new __WEBPACK_IMPORTED_MODULE_4__range_array_model__["a" /* RangeArray */]([], []);
    }
    RangeDataComponent.prototype.ngOnInit = function () {
        this.getRangeData();
        this.globalData = this.dataArrayService.getData();
        /*check for quantifier*/
        if (this.dataToEdit) {
            if (typeof this.dataToEdit[this.dataToEdit.length - 1] === 'object') {
                this.compiledData = this.beautyDataService.compileDataFromViewData(this.dataToEdit.slice(0, -1));
            }
            else {
                this.compiledData = this.beautyDataService.compileDataFromViewData(this.dataToEdit.slice());
            }
            this.compiledData.shift();
            this.compiledData.pop();
            if (this.compiledData[0] === '^') {
                this.posNegStatus = 'Negative';
                this.compiledData.shift();
            }
        }
        this.parent = this.allElPosService.getInputFromKeyboard();
    };
    RangeDataComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.parent.direction === 'left') {
            this.parent.parent.splice(this.parent.index, 1);
        }
        if (this.parent.direction === 'right') {
            this.parent.parent.splice(this.parent.index + 1, 1);
        }
        var elements = this.getRangeElements();
        if (elements.length > 0) {
            elements = this.sortArrayBasedOnAnother(elements, this.rangeDataService.getRangeData().categories.all);
            elements = this.spliceArrayWithTemplate(elements, this.rangeData.categories.controlCharacters);
            elements = this.spliceArrayWithTemplate(elements, this.rangeData.categories.numbers);
            elements = this.spliceArrayWithTemplate(elements, this.rangeData.categories.punctuation);
            elements = this.spliceArrayWithTemplate(elements, this.rangeData.categories.bigAlphabet);
            elements = this.spliceArrayWithTemplate(elements, this.rangeData.categories.smallAlphabet);
            elements = this.spliceArrayWithTemplate(elements, this.rangeData.categories.extended);
            elements.unshift('[');
            elements.push(']');
            if (!this.dataToEdit) {
                var parent = this.allElPosService.getInputFromKeyboard();
                var index = this.allElPosService.getInputFromKeyboard().index;
                var checkForEmptyLookaround = this.checkForEmptyLookaround(parent.parent, index);
                var newRange = this.beautyDataService.compileViewDataFromData(elements.slice())[0];
                if (parent.direction === 'left') {
                    if (checkForEmptyLookaround) {
                        parent.parent.splice(index, 1, newRange);
                    }
                    else {
                        parent.parent.splice(index, 0, newRange);
                    }
                }
                if (parent.direction === 'right') {
                    if (checkForEmptyLookaround) {
                        parent.parent.splice(index, 1, newRange);
                    }
                    else {
                        parent.parent.splice(index + 1, 0, newRange);
                    }
                }
                setTimeout(function () {
                    _this.dataArrayService.informTextInpCompToRecompileDataFromViewData('fixCaret');
                }, 0);
                this.allElPosService.setInputFromKeyboardIndex(index + 1);
            }
            else {
                var newRange = this.beautyDataService.compileViewDataFromData(elements.slice())[0];
                /*inserting quantifier back*/
                if (typeof this.dataToEdit[this.dataToEdit.length - 1] === 'object') {
                    newRange.push(this.dataToEdit[this.dataToEdit.length - 1]);
                }
                this.dataToEdit.length = 0;
                this.addArrayToArray(this.dataToEdit, newRange);
                this.elementService.elementToEditClicked(false);
                this.dataArrayService.informTextInpCompToRecompileDataFromViewData('range');
            }
        }
        else {
            if (this.dataToEdit) {
                this.dataToEdit.length = 0;
                this.elementService.elementToEditClicked(false);
                this.dataArrayService.informTextInpCompToRecompileDataFromViewData('range');
            }
        }
    };
    RangeDataComponent.prototype.sortArrayBasedOnAnother = function (arrayToSort, baseArray) {
        var outputArray = [];
        for (var i = 0; i < arrayToSort.length; i++) {
            outputArray[baseArray.indexOf(arrayToSort[i])] = arrayToSort[i];
        }
        for (var i = 1; i < outputArray.length; i++) {
            var j = i;
            if (!outputArray[j])
                continue;
            while (j > 0 && !outputArray[j - 1]) {
                outputArray[j - 1] = outputArray[j];
                outputArray[j] = undefined;
                j--;
            }
        }
        var index = outputArray.length - 1;
        for (index; index >= 0; index--) {
            if (outputArray[index])
                break;
        }
        outputArray = outputArray.slice(0, index + 1);
        return outputArray;
    };
    RangeDataComponent.prototype.spliceArrayWithTemplate = function (arrayToSplice, template) {
        var arrayToSpliceCopy = [];
        var endSpliceIndex;
        for (var i = 0; i < arrayToSplice.length; i++) {
            var templateIndex = template.indexOf(arrayToSplice[i]);
            if (templateIndex === -1) {
                arrayToSpliceCopy.push(arrayToSplice[i]);
                continue;
            }
            endSpliceIndex = i;
            while (arrayToSplice[endSpliceIndex + 1] && arrayToSplice[endSpliceIndex + 1] === template[templateIndex + 1]) {
                templateIndex++;
                endSpliceIndex++;
            }
            if (endSpliceIndex === i) {
                arrayToSpliceCopy.push(arrayToSplice[i]);
            }
            else {
                arrayToSpliceCopy.push(arrayToSplice[i] + '-' + arrayToSplice[endSpliceIndex]);
                i = endSpliceIndex;
            }
        }
        return arrayToSpliceCopy;
    };
    RangeDataComponent.prototype.getRangeData = function () {
        var _this = this;
        this.elementService.getRangeData().then(function (rangeData) { return _this.rangeData = rangeData; });
    };
    RangeDataComponent.prototype.getRangeElements = function () {
        return this.rangeDataService.getRangeElements();
    };
    RangeDataComponent.prototype.addArrayToArray = function (mainArray, secondaryArray) {
        for (var i = 0; i < secondaryArray.length; i++) {
            mainArray.push(secondaryArray[i]);
        }
    };
    RangeDataComponent.prototype.checkForEmptyLookaround = function (parent, index) {
        if (typeof parent[index] === 'object' && parent[index][0] === '_') {
            return true;
        }
        return false;
    };
    RangeDataComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    return RangeDataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], RangeDataComponent.prototype, "dataToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], RangeDataComponent.prototype, "viewData", void 0);
RangeDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'range-data',
        template: __webpack_require__(204),
        styles: [__webpack_require__(186)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__range_data_service__["a" /* RangeDataService */], __WEBPACK_IMPORTED_MODULE_8__caret_service__["a" /* CaretService */], __WEBPACK_IMPORTED_MODULE_9__ascii_ascii_service__["a" /* AsciiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_service__["a" /* ElementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__range_data_service__["a" /* RangeDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__range_data_service__["a" /* RangeDataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__ascii_ascii_service__["a" /* AsciiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ascii_ascii_service__["a" /* AsciiService */]) === "function" && _f || Object])
], RangeDataComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=range-data.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pos_neg_pos_neg_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascii_ascii_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_data_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__presets_presets_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeDataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RangeDataModule = (function () {
    function RangeDataModule() {
    }
    return RangeDataModule;
}());
RangeDataModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__range_data_component__["a" /* RangeDataComponent */],
            __WEBPACK_IMPORTED_MODULE_1__ascii_ascii_component__["a" /* AsciiComponent */],
            __WEBPACK_IMPORTED_MODULE_0__pos_neg_pos_neg_component__["a" /* PosNegComponent */],
            __WEBPACK_IMPORTED_MODULE_3__presets_presets_component__["a" /* PresetsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__range_data_component__["a" /* RangeDataComponent */]
        ]
    })
], RangeDataModule);

//# sourceMappingURL=range-data.module.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_element_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hint_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beauty_data_quantifier_quantifier_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beauty_data_element_position_model__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectedElementComponent = (function () {
    function SelectedElementComponent(hintService, quantifierService) {
        this.hintService = hintService;
        this.quantifierService = quantifierService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    SelectedElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementsByClassName('area')[0].blur();
        this.quantifierService.click(true);
        this.hintSubscription = this.hintService.getHint().subscribe(function (hint) { return _this.rangeElementHint = hint; });
        if (this.elementToEdit) {
            switch (this.elementToEdit[0]) {
                case 'range': {
                    this.elementToEditName = 'Range';
                    break;
                }
                case 'group': {
                    if (this.elementToEdit[1].indexOf('lookAhead') !== -1
                        || this.elementToEdit[1].indexOf('lookBehind') !== -1) {
                        this.elementToEditName = 'Lookaround';
                    }
                    else {
                        this.elementToEditName = 'Group';
                    }
                    break;
                }
                case 'quantifier': {
                    this.elementToEditName = 'Quantifier';
                    break;
                }
                case 'anchor': {
                    this.elementToEditName = 'Anchors';
                    break;
                }
                case 'anchorOpposite': {
                    this.elementToEditName = 'Anchors';
                    break;
                }
            }
        }
    };
    SelectedElementComponent.prototype.ngAfterViewInit = function () {
        this.dataRef.nativeElement.style.display = 'block';
        var areaCoords = document.getElementsByClassName('area')[0].getBoundingClientRect();
        var clientCoords = this.dataRef.nativeElement.getBoundingClientRect();
        var width = clientCoords.right - clientCoords.left;
        if (!this.selectedElement || this.selectedElement.name !== 'Group') {
            if (this.selectedElement) {
                this.dataRef.nativeElement.style.top =
                    ~~(this.position.position.height + this.position.position.top - areaCoords.top) + 12 + "px";
                this.dataRef.nativeElement.style.left =
                    ~~(this.position.position.width / 2 + this.position.position.left - areaCoords.left - width / 2) + "px";
            }
            else {
                this.dataRef.nativeElement.style.top =
                    ~~(this.position.position.height + this.position.position.top - window.pageYOffset - areaCoords.top) + 12 + "px";
                this.dataRef.nativeElement.style.left =
                    ~~(this.position.position.width / 2 + this.position.position.left - window.pageXOffset - areaCoords.left - width / 2) + "px";
            }
        }
        else {
            this.dataRef.nativeElement.style.top =
                ~~(areaCoords.height / 2 + 10) + 12 + "px";
            this.dataRef.nativeElement.style.left =
                ~~(areaCoords.width / 2 - width / 2) + "px";
        }
    };
    SelectedElementComponent.prototype.ngOnDestroy = function () {
        this.quantifierService.click(false);
        this.hintSubscription.unsubscribe();
    };
    SelectedElementComponent.prototype.stopPropagation = function (event) {
        event.stopPropagation();
    };
    SelectedElementComponent.prototype.handleMouseDown = function (event) {
        event.stopPropagation();
    };
    return SelectedElementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_element_model__["a" /* Element */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_element_model__["a" /* Element */]) === "function" && _a || Object)
], SelectedElementComponent.prototype, "selectedElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], SelectedElementComponent.prototype, "elementToEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], SelectedElementComponent.prototype, "viewData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__beauty_data_element_position_model__["a" /* ElementPosition */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__beauty_data_element_position_model__["a" /* ElementPosition */]) === "function" && _b || Object)
], SelectedElementComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], SelectedElementComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('data'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object)
], SelectedElementComponent.prototype, "dataRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectedElementComponent.prototype, "handleMouseDown", null);
SelectedElementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'selected-element',
        template: __webpack_require__(205),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__hint_service__["a" /* HintService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__beauty_data_quantifier_quantifier_service__["a" /* QuantifierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__beauty_data_quantifier_quantifier_service__["a" /* QuantifierService */]) === "function" && _e || Object])
], SelectedElementComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=selected-element.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selected_element_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anchors_anchors_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_group_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lookaround_lookaround_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__range_data_range_data_module__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__beauty_data_quantifier_quantifier_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedElementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SelectedElementModule = (function () {
    function SelectedElementModule() {
    }
    return SelectedElementModule;
}());
SelectedElementModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__selected_element_component__["a" /* SelectedElementComponent */],
            __WEBPACK_IMPORTED_MODULE_2__anchors_anchors_component__["a" /* AnchorsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__group_group_component__["a" /* GroupComponent */],
            __WEBPACK_IMPORTED_MODULE_4__lookaround_lookaround_component__["a" /* LookaroundComponent */],
            __WEBPACK_IMPORTED_MODULE_7__beauty_data_quantifier_quantifier_component__["a" /* QuantifierComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__range_data_range_data_module__["a" /* RangeDataModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__selected_element_component__["a" /* SelectedElementComponent */],
            __WEBPACK_IMPORTED_MODULE_3__group_group_component__["a" /* GroupComponent */],
            __WEBPACK_IMPORTED_MODULE_7__beauty_data_quantifier_quantifier_component__["a" /* QuantifierComponent */]
        ]
    })
], SelectedElementModule);

//# sourceMappingURL=selected-element.module.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_element_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beauty_data_beauty_data_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beauty_data_selection_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_elements_position_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__caret_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buffer_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TextInputComponent = (function () {
    function TextInputComponent(dataArrayService, elementService, beautyDataService, cdr, selectionService, allElPosService, caretService, bufferService) {
        this.dataArrayService = dataArrayService;
        this.elementService = elementService;
        this.beautyDataService = beautyDataService;
        this.cdr = cdr;
        this.selectionService = selectionService;
        this.allElPosService = allElPosService;
        this.caretService = caretService;
        this.bufferService = bufferService;
        this.isHideMainEl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.selectGroup = false;
        this.selectGroupDisable = false;
        this.dataArray = [];
        this.viewData = [];
        this.isInputFromKeyboard = false;
        this.hideAllQuantifiers = false;
        this.globalQuantifier = false;
        this.isUndoRedoClicked = false; // for preventing adding data to buffer after undo/redo
    }
    TextInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainElementSubscription = this.elementService.getClickedElement()
            .subscribe(function (element) {
            if ((_this.viewData.length === 0 || _this.viewData[0].length === 0) && element && element.name === 'Group') {
                _this.elementService.elementClicked(undefined);
                _this.caretService.setAreaCoords();
                return;
            }
            if (element) {
                _this.caretService.stopBlinking();
            }
            _this.selectedMainElement = element;
            if (element && element.name !== 'Group') {
                if (_this.inputFromKeyboard.direction === 'left') {
                    _this.inputFromKeyboard.parent.splice(_this.inputFromKeyboard.index, 0, ['main-element', element.name]);
                }
                else {
                    _this.inputFromKeyboard.parent.splice(_this.inputFromKeyboard.index + 1, 0, ['main-element', element.name]);
                }
            }
        });
        this.dataSubscription = this.dataArrayService.subscribeOnDataChange()
            .subscribe(function (data) {
            _this.dataArray = data;
            _this.viewData = [_this.compileViewDataFromData(data.slice())];
            _this.selectionService.setViewData(_this.viewData);
            _this.cdr.detectChanges();
        });
        this.subscribeForRecompileData = this.dataArrayService.subscribeForRecompileDataFromEdit()
            .subscribe(function (recompile) {
            //this.elementToEdit = undefined;
            var copyOfViewData = _this.viewData.slice();
            var pathToParent = [];
            if (recompile === 'range') {
                _this.getPathToElement(_this.viewData, _this.inputFromKeyboard.parent, pathToParent);
            }
            var newData = _this.beautyDataService.compileDataFromViewData(_this.createFullCopyOfArray(copyOfViewData));
            if (recompile === 'fixCaret') {
                _this.inputFromKeyboard = _this.allElPosService.getInputFromKeyboard();
                _this.caretService.setAreaCoords();
                setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
            }
            if (_this.isInputFromKeyboard || recompile === 'group' || recompile === 'deleteLookaround'
                || recompile === 'editRange'
                || recompile === 'delete'
                || recompile === 'anchor'
                || recompile === 'range'
                || recompile === 'quantifier'
                || recompile === 'changeLookaround') {
                _this.dataArrayService.setData(newData);
                _this.dataArray = newData;
                _this.isInputFromKeyboard = false;
                _this.caretService.stopBlinking();
            }
            else {
                _this.dataArrayService.setDataWithoutSubject(newData);
                _this.dataArray = newData;
                _this.cdr.detectChanges();
            }
            if (recompile === 'range') {
                _this.inputFromKeyboard.parent = _this.viewData;
                for (var i = pathToParent.length - 1; i >= 0; i--) {
                    _this.inputFromKeyboard.parent = _this.inputFromKeyboard.parent[pathToParent[i]];
                }
                setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
            }
            // adding new state to the buffer
            if (!_this.isUndoRedoClicked) {
                if (recompile === 'lateBufferDataChange') {
                    setTimeout(function () { _this.bufferService.add(_this.createFullCopyOfArray(_this.viewData)); }, 0);
                }
                else {
                    _this.bufferService.add(_this.createFullCopyOfArray(_this.viewData));
                }
            }
            else {
                _this.isUndoRedoClicked = false;
            }
        });
    };
    TextInputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.viewData[0] = [];
        this.bufferService.add(this.createFullCopyOfArray(this.viewData));
        //Possibility to type from keyboard right after loading page
        this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', -1);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        setTimeout(function () {
            _this.caretService.setAreaCoords();
            _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard);
        }, 0);
    };
    TextInputComponent.prototype.ngOnDestroy = function () {
        this.mainElementSubscription.unsubscribe();
        this.dataSubscription.unsubscribe();
        this.editElementSubscription.unsubscribe();
        this.subscribeForRecompileData.unsubscribe();
    };
    TextInputComponent.prototype.handleQuantClicked = function (value) {
        switch (value) {
            case 'show': {
                this.globalQuantifier = true;
                this.caretService.stopBlinking();
                break;
            }
            case 'hide': {
                this.hideAllQuantifiers = false;
                this.globalQuantifier = false;
                this.caretService.startBlinking();
                break;
            }
            case 'destroyed': {
                this.hideAllQuantifiers = false;
                this.globalQuantifier = false;
                this.caretService.startBlinking();
                break;
            }
        }
    };
    TextInputComponent.prototype.noSelectedMainEl = function (event) {
        if (this.selectedMainElement && (event.toElement.className === 'area')) {
            this.selectedMainElement = undefined;
            this.elementService.elementClicked(undefined);
        }
        if (this.elementToEdit && (event.toElement.className !== 'selectedElement') && (event.toElement.className !== '')
            && (event.toElement.className !== 'search') && (event.toElement.className !== 'data Range')
            && (event.toElement.className !== 'top') && (event.toElement.className !== 'purple')
            && (event.toElement.className !== 'Positive') && (event.toElement.className !== 'data Group')
            && (event.toElement.className !== 'data Lookaround')) {
            this.elementToEdit = undefined;
            this.elementService.elementToEditClicked(false);
            this.informElementsToCancelEditingCss();
        }
        if (this.globalQuantifier) {
            this.hideAllQuantifiers = true;
        }
    };
    TextInputComponent.prototype.informElementsToCancelEditingCss = function () {
        this.elementService.cancelEditing();
    };
    TextInputComponent.prototype.compileViewDataFromData = function (data) {
        return this.beautyDataService.compileViewDataFromData(data);
    };
    TextInputComponent.prototype.handleInnerViewData = function (state) {
        var _this = this;
        // Saving input from keyboard before recompile (reference on parent will be lost during it)
        var pathToParent = [];
        this.getPathToElement(this.viewData, this.inputFromKeyboard.parent, pathToParent);
        this.viewData = state.futureArray;
        this.checkForEdit(state.futureArray);
        if (!this.elementToEdit) {
            var newViewData = state.futureArray;
            var newData = this.beautyDataService.compileDataFromViewData(newViewData);
            this.dataArrayService.setData(newData);
            setTimeout(function () {
                // Restoring input from keyboard
                _this.inputFromKeyboard.parent = _this.viewData;
                for (var i = pathToParent.length - 1; i >= 0; i--) {
                    _this.inputFromKeyboard.parent = _this.inputFromKeyboard.parent[pathToParent[i]];
                }
                _this.caretService.startBlinking();
                _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard);
            }, 0);
        }
    };
    TextInputComponent.prototype.setSelectedElementPosition = function (eventData) {
        this.selectedElementPosition = eventData;
    };
    TextInputComponent.prototype.checkForEdit = function (data) {
        this.elementToEdit = undefined;
        for (var i = 0; i < data.length; i++) {
            if (this.elementToEdit) {
                break;
            }
            if (data[0] === 'edit') {
                // data.shift();
                this.elementToEdit = data;
                this.caretService.stopBlinking();
            }
            if (!this.checkIfString(data[i])) {
                this.checkForEdit(data[i]);
            }
        }
    };
    TextInputComponent.prototype.checkIfString = function (data) {
        return typeof data === 'string';
    };
    TextInputComponent.prototype.handleMouseDown = function (event) {
        var _this = this;
        this.caretService.setAreaCoords();
        if (this.selectedMainElement) {
            if (this.selectedMainElement.name === 'Group') {
                this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', 0);
                this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
                this.caretService.fixCaretPosition(this.viewData, this.inputFromKeyboard);
            }
            //this.findClosestEl(event);
            return false;
        }
        if (this.selectGroupStatus === 'Ungroup') {
            this.selectionService.applyGrouping();
            this.selectGroupStatus = 'Group';
        }
        this.hideMainEl(false);
        this.selectGroup = false;
        var top = event.pageY;
        var left = event.pageX;
        var mouseStart = { top: top, left: left };
        this.selectionKeybStart = null;
        this.selectionStart = mouseStart;
        this.allElPosService.setMouseStart(mouseStart);
        this.allElPosService.setMouseCurrPosition(mouseStart, this.viewData);
        if (this.selectGroupStatus = 'Group') {
            setTimeout(function () { _this.findClosestEl(event); }, 0);
            this.selectGroupStatus = undefined;
            return;
        }
        this.findClosestEl(event);
        event.preventDefault();
    };
    TextInputComponent.prototype.handleMouseMove = function (event) {
        if (this.allElPosService.getMouseStart() && !this.selectGroup && !this.selectionKeybStart) {
            this.caretService.stopBlinking();
            var top = event.pageY;
            var left = event.pageX;
            var mouseCurrPosition = { top: top, left: left };
            this.selectionEnd = mouseCurrPosition;
            this.allElPosService.setMouseCurrPosition(mouseCurrPosition);
        }
        event.preventDefault();
        // this.findClosestEl(event);
    };
    TextInputComponent.prototype.handleMouseUp = function (event) {
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length > 0) {
            this.hideMainEl(true);
            this.selectGroup = true;
            this.selectGroupDisable = this.getElementDepthInData(this.viewData[0], selectedElements[0]) >= 5;
            this.caretService.stopBlinking();
        }
        else {
            this.caretService.startBlinking();
            this.allElPosService.setMouseStart(null);
        }
        event.preventDefault();
    };
    TextInputComponent.prototype.getElementDepthInData = function (data, elementToFind) {
        var elementDepth = null;
        for (var i = 0; i < data.length; i++) {
            if (data[i] === elementToFind) {
                return 1;
            }
            if (typeof (data[i]) === "object" && data[i][0] === "group") {
                elementDepth = this.getElementDepthInData(data[i], elementToFind);
                if (elementDepth)
                    break;
            }
        }
        return elementDepth ? elementDepth + 1 : null;
    };
    TextInputComponent.prototype.handleGroupSelection = function (status) {
        this.selectGroupStatus = status;
    };
    TextInputComponent.prototype.hideMainEl = function (hide) {
        this.isHideMainEl.emit(hide);
    };
    TextInputComponent.prototype.findClosestEl = function (event, position) {
        var _this = this;
        var Xcoord;
        var Ycoord;
        if (position && !event) {
            Xcoord = position.left + window.pageXOffset;
            Ycoord = position.top + window.pageYOffset;
        }
        else {
            Xcoord = event.clientX + window.pageXOffset;
            Ycoord = event.clientY + window.pageYOffset;
        }
        var element = this.allElPosService.findClosestElementToElementPos(Xcoord, Ycoord);
        var parentOfElement = this.allElPosService.findDirectParentOfElement(this.viewData, element.element);
        if (parentOfElement.length === 0) {
            parentOfElement = this.viewData[0];
        }
        var index = parentOfElement.indexOf(element.element);
        this.allElPosService.setInputFromKeyboard(parentOfElement, element.direction || 'right', index);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        if (!(position && !event)) {
            setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
        }
    };
    TextInputComponent.prototype.handleControls = function (event) {
        switch (event.key) {
            case 'Backspace':
                this.handleDeletion(event);
                break;
            case 'Delete':
                this.handleDeletion(event);
                break;
            case 'ArrowLeft':
                this.handleArrowLeft(event);
                break;
            case 'ArrowRight':
                this.handleArrowRight(event);
                break;
            case 'Home':
                this.handleHome(event);
                break;
            case 'ArrowUp':
                this.handleArrowUp(event);
                break;
            case 'End':
                this.handleEnd(event);
                break;
            case 'ArrowDown':
                this.handleArrowDown(event);
                break;
            case 'Shift': break;
            default:
                this.selectionKeybStart = null;
                break;
        }
        if (event.ctrlKey) {
            event.stopPropagation();
            event.preventDefault();
            switch (event.key) {
                case 'z':
                    this.handleUndo(event);
                    break;
                case 'y':
                    this.handleRedo(event);
                    break;
            }
        }
    };
    TextInputComponent.prototype.handleDeletion = function (event) {
        var _this = this;
        event.preventDefault();
        /*Part for deletion of selected elements*/
        if (this.deleteSelectedElements() > 0) {
            this.caretService.setAreaCoords();
            setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
            return;
        }
        /*Part for deletion of quantifier*/
        var previous = this.inputFromKeyboard.parent[this.inputFromKeyboard.index + (this.inputFromKeyboard.direction === 'right' ? 1 : 0) - 1];
        if (event.key === 'Backspace' && previous && previous.length > 0 && previous[previous.length - 1][0] === 'quantifier') {
            previous.splice(previous.length - 1, 1);
            setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
            return;
        }
        /*Part for deletion of usual items*/
        var reduceIndex = 0;
        if (this.inputFromKeyboard.direction === 'left')
            reduceIndex++;
        if (event.key === 'Delete') {
            if (this.inputFromKeyboard.parent[this.inputFromKeyboard.index
                + (this.inputFromKeyboard.direction === 'right' ? 1 : 0)] &&
                this.inputFromKeyboard.parent[this.inputFromKeyboard.index
                    + (this.inputFromKeyboard.direction === 'right' ? 1 : 0)][0] === 'quantifier') {
                return;
            }
            this.inputFromKeyboard.index++;
        }
        var skipCount = 0;
        if (typeof (this.inputFromKeyboard.parent[0]) === 'string')
            skipCount++;
        if (typeof (this.inputFromKeyboard.parent[1]) === 'string')
            skipCount++;
        if (this.viewData.length === 0 || this.viewData[0].length === 0 || this.inputFromKeyboard.index - reduceIndex - skipCount <= -1) {
            if (event.key === 'Delete')
                this.inputFromKeyboard.index--;
            return;
        }
        var pathToParent = [];
        this.getPathToElement(this.viewData, this.inputFromKeyboard.parent, pathToParent);
        var recompileCode = 'key';
        this.inputFromKeyboard.parent.splice(this.inputFromKeyboard.index - reduceIndex, 1);
        if ((this.inputFromKeyboard.parent.length - skipCount > 0 || this.inputFromKeyboard.parent === this.viewData[0]) &&
            !(this.inputFromKeyboard.parent[skipCount] && this.inputFromKeyboard.parent[skipCount][0] === 'quantifier')) {
            this.isInputFromKeyboard = false;
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData(recompileCode);
            this.inputFromKeyboard.parent = this.viewData;
            for (var i = pathToParent.length - 1; i >= 0; i--) {
                this.inputFromKeyboard.parent = this.inputFromKeyboard.parent[pathToParent[i]];
            }
            this.inputFromKeyboard.index--;
        }
        else {
            var finalParentDistance = void 0;
            for (var distanceToTrueParent = 0; distanceToTrueParent < pathToParent.length - 1; distanceToTrueParent++) {
                finalParentDistance = distanceToTrueParent;
                this.inputFromKeyboard.parent = this.viewData;
                for (var i = pathToParent.length - 1; i >= distanceToTrueParent; i--) {
                    this.inputFromKeyboard.parent = this.inputFromKeyboard.parent[pathToParent[i]];
                }
                if (!(this.inputFromKeyboard.parent.length === 0 ||
                    (this.inputFromKeyboard.parent.length === 1 &&
                        typeof (this.inputFromKeyboard.parent[0] === 'string')) ||
                    (this.inputFromKeyboard.parent.length === 2 &&
                        typeof (this.inputFromKeyboard.parent[0] === 'string') &&
                        typeof (this.inputFromKeyboard.parent[1] === 'string')))) {
                    break;
                }
                this.inputFromKeyboard.parent = this.viewData;
                for (var i = pathToParent.length - 1; i >= distanceToTrueParent + 1; i--) {
                    this.inputFromKeyboard.parent = this.inputFromKeyboard.parent[pathToParent[i]];
                }
                this.inputFromKeyboard.parent.splice(pathToParent[distanceToTrueParent], 1);
                this.inputFromKeyboard.index = pathToParent[distanceToTrueParent] - 1;
            }
            this.isInputFromKeyboard = false;
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('key');
            this.inputFromKeyboard.parent = this.viewData;
            for (var i = pathToParent.length - 1; i >= finalParentDistance + 1; i--) {
                this.inputFromKeyboard.parent = this.inputFromKeyboard.parent[pathToParent[i]];
            }
        }
        this.caretService.fixCaretPosition(this.viewData, this.inputFromKeyboard);
    };
    TextInputComponent.prototype.handleArrowLeft = function (event) {
        var _this = this;
        if (!this.selectionKeybStart && event.shiftKey) {
            this.setKeybSelectionStart();
        }
        event.preventDefault();
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length > 0 && !event.shiftKey) {
            this.inputFromKeyboard.direction = 'left';
            var inputTmp = this.findItemInViewData(selectedElements[0], this.viewData);
            this.inputFromKeyboard.parent = inputTmp.parent;
            this.inputFromKeyboard.index = inputTmp.index;
            this.allElPosService.removeSelection();
            this.selectionStart = null;
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
            this.selectGroup = false;
            this.hideMainEl(false);
            setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
            return;
        }
        else if (!event.shiftKey && this.selectionKeybStart) {
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
        }
        var skipCount = 0;
        if (this.inputFromKeyboard.direction === 'left')
            skipCount++;
        if (typeof (this.inputFromKeyboard.parent[0]) === 'string')
            skipCount++;
        if (typeof (this.inputFromKeyboard.parent[1]) === 'string')
            skipCount++;
        if (this.inputFromKeyboard.index - skipCount === -1) {
            return;
        }
        this.inputFromKeyboard.index--;
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard, event.shiftKey);
            if (_this.selectionKeybStart && event.shiftKey) {
                _this.setKeybSelectionEnd();
            }
        }, 0);
    };
    TextInputComponent.prototype.handleArrowRight = function (event) {
        var _this = this;
        if (!this.selectionKeybStart && event.shiftKey) {
            this.setKeybSelectionStart();
        }
        event.preventDefault();
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length > 0 && !event.shiftKey) {
            this.inputFromKeyboard.direction = 'right';
            var inputTmp = this.findItemInViewData(selectedElements[selectedElements.length - 1], this.viewData);
            this.inputFromKeyboard.parent = inputTmp.parent;
            this.inputFromKeyboard.index = inputTmp.index;
            this.allElPosService.removeSelection();
            this.selectionStart = null;
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
            this.selectGroup = false;
            this.hideMainEl(false);
            setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
            return;
        }
        else if (!event.shiftKey && this.selectionKeybStart) {
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
        }
        if (this.inputFromKeyboard.index === this.inputFromKeyboard.parent.length - 1) {
            if (this.inputFromKeyboard.direction === 'left') {
                this.inputFromKeyboard.direction = 'right';
                if (this.inputFromKeyboard.parent[this.inputFromKeyboard.parent.length - 1][0] === 'quantifier') {
                    this.inputFromKeyboard.index--;
                }
                setTimeout(function () {
                    _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard, event.shiftKey);
                    if (_this.selectionKeybStart && event.shiftKey) {
                        _this.setKeybSelectionEnd();
                    }
                }, 0);
            }
            return;
        }
        if (this.inputFromKeyboard.parent[this.inputFromKeyboard.index
            + (this.inputFromKeyboard.direction === 'right' ? 1 : 0)][0] === 'quantifier') {
            return;
        }
        this.inputFromKeyboard.index++;
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard, event.shiftKey);
            if (_this.selectionKeybStart && event.shiftKey) {
                _this.setKeybSelectionEnd();
            }
        }, 0);
    };
    TextInputComponent.prototype.handleArrowUp = function (event) {
        var _this = this;
        if (!this.selectionKeybStart && event.shiftKey) {
            this.setKeybSelectionStart();
        }
        event.preventDefault();
        if (!event.shiftKey) {
            this.allElPosService.removeSelection();
            this.selectionStart = null;
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
            this.selectGroup = false;
            this.hideMainEl(false);
        }
        var position = this.caretService.getCaretPosition();
        this.findClosestEl(null, { top: position.top - position.height * 2 / 3, left: position.left });
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard, event.shiftKey);
            if (_this.selectionKeybStart && event.shiftKey) {
                _this.setKeybSelectionEnd();
            }
        }, 0);
    };
    TextInputComponent.prototype.handleArrowDown = function (event) {
        var _this = this;
        if (!this.selectionKeybStart && event.shiftKey) {
            this.setKeybSelectionStart();
        }
        event.preventDefault();
        if (!event.shiftKey) {
            this.allElPosService.removeSelection();
            this.selectionStart = null;
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
            this.selectGroup = false;
            this.hideMainEl(false);
        }
        var position = this.caretService.getCaretPosition();
        this.findClosestEl(null, { top: position.top + position.height, left: position.left + 6 });
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard, event.shiftKey);
            if (_this.selectionKeybStart && event.shiftKey) {
                _this.setKeybSelectionEnd();
            }
        }, 0);
    };
    TextInputComponent.prototype.handleHome = function (event) {
        var _this = this;
        if (!this.selectionKeybStart && event.shiftKey) {
            this.setKeybSelectionStart();
        }
        event.preventDefault();
        if (!event.shiftKey) {
            this.allElPosService.removeSelection();
            this.selectionStart = null;
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
            this.selectGroup = false;
            this.hideMainEl(false);
        }
        var skipCount = 0;
        if (this.inputFromKeyboard.direction === 'left')
            skipCount++;
        if (typeof (this.inputFromKeyboard.parent[0]) === 'string')
            skipCount++;
        if (typeof (this.inputFromKeyboard.parent[1]) === 'string')
            skipCount++;
        if (this.inputFromKeyboard.index - skipCount === -1) {
            return;
        }
        this.inputFromKeyboard.index = -1 + skipCount;
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard, event.shiftKey);
            if (_this.selectionKeybStart && event.shiftKey) {
                _this.setKeybSelectionEnd();
            }
        }, 0);
    };
    TextInputComponent.prototype.handleEnd = function (event) {
        var _this = this;
        if (!this.selectionKeybStart && event.shiftKey) {
            this.setKeybSelectionStart();
        }
        event.preventDefault();
        if (!event.shiftKey) {
            this.allElPosService.removeSelection();
            this.selectionStart = null;
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
            this.selectGroup = false;
            this.hideMainEl(false);
        }
        if (this.inputFromKeyboard.index === this.inputFromKeyboard.parent.length - 1 &&
            this.inputFromKeyboard.direction !== 'left') {
            return;
        }
        if (this.inputFromKeyboard.direction === 'left') {
            this.inputFromKeyboard.direction = 'right';
        }
        if (this.inputFromKeyboard.parent[this.inputFromKeyboard.parent.length - 1][0] === 'quantifier') {
            this.inputFromKeyboard.index = this.inputFromKeyboard.parent.length - 2;
        }
        else {
            this.inputFromKeyboard.index = this.inputFromKeyboard.parent.length - 1;
        }
        setTimeout(function () {
            _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard, event.shiftKey);
            if (_this.selectionKeybStart && event.shiftKey) {
                _this.setKeybSelectionEnd();
            }
        }, 0);
    };
    TextInputComponent.prototype.handleUndo = function (event) {
        this.isUndoRedoClicked = true;
        var bufferData = this.bufferService.moveBehind();
        if (bufferData) {
            this.viewData = bufferData;
        }
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('');
        this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', this.viewData[0].length - 1);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        this.caretService.fixCaretPosition(this.viewData, this.inputFromKeyboard);
    };
    TextInputComponent.prototype.handleRedo = function (event) {
        this.isUndoRedoClicked = true;
        var bufferData = this.bufferService.moveAhead();
        if (bufferData) {
            this.viewData = bufferData;
        }
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData('');
        this.allElPosService.setInputFromKeyboard(this.viewData[0], 'right', this.viewData[0].length - 1);
        this.inputFromKeyboard = this.allElPosService.getInputFromKeyboard();
        this.caretService.fixCaretPosition(this.viewData, this.inputFromKeyboard);
    };
    TextInputComponent.prototype.setKeybSelectionStart = function () {
        var position = this.caretService.getCaretPosition();
        var caretStart = { top: position.top + position.height / 2, left: position.left + 6 };
        this.selectionKeybStart = caretStart;
        this.allElPosService.setMouseStart(caretStart);
        this.caretService.stopBlinking();
    };
    TextInputComponent.prototype.setKeybSelectionEnd = function () {
        var position = this.caretService.getCaretPosition();
        var caretEnd = { top: position.top + position.height / 2, left: position.left };
        this.selectionKeybEnd = caretEnd;
        this.allElPosService.setMouseCurrPosition(caretEnd, this.viewData);
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length === 0) {
            this.hideMainEl(false);
            this.selectGroup = false;
        }
        else {
            this.hideMainEl(true);
            this.selectGroup = true;
            this.selectGroupDisable = this.getElementDepthInData(this.viewData[0], selectedElements[0]) >= 5;
        }
    };
    TextInputComponent.prototype.handleKeyDown = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        if (!this.inputFromKeyboard || event.ctrlKey) {
            return false;
        }
        this.deleteSelectedElements();
        var char = [event.key];
        var el = char[0];
        if (el === '\\' || el === '+' || el === '{' || el === '}' || el === ',' || el === '*' || el === '?' ||
            el === '.' || el === '|' || el === '(' || el === ')' || el === '[' || el === ']' || el === '-' ||
            el === '^' || el === '$' || el === ':' || el === '&' || el === '=' || el === '<' || el === '!' || el === '#') {
            char[0] = '\\' + el;
        }
        var parent = this.inputFromKeyboard.parent;
        if (this.viewData.length === 0 || this.viewData[0].length === 0) {
            if (this.viewData.length === 0) {
                this.viewData.push(char);
            }
            else {
                this.viewData[0] = char;
            }
            this.isInputFromKeyboard = true;
            this.inputFromKeyboard.index = 0;
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('key');
            this.inputFromKeyboard.parent = this.viewData[0];
            this.inputFromKeyboard.direction = 'right';
            setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
            return false;
        }
        var index = this.inputFromKeyboard.index;
        var direction = this.inputFromKeyboard.direction;
        var checkForEmptyLookaround = this.checkForEmptyLookaround(parent, index);
        if (direction === 'left') {
            if (checkForEmptyLookaround) {
                parent.splice(index, 1, char);
            }
            else {
                parent.splice(index, 0, char);
            }
            this.inputFromKeyboard.index++;
        }
        if (direction === 'right') {
            if (checkForEmptyLookaround) {
                parent.splice(index, 1, char);
            }
            else {
                parent.splice(index + 1, 0, char);
            }
            this.inputFromKeyboard.index++;
        }
        this.isInputFromKeyboard = false;
        this.dataArrayService.informTextInpCompToRecompileDataFromViewData({ name: 'key', link: char });
        setTimeout(function () { _this.caretService.fixCaretPosition(_this.viewData, _this.inputFromKeyboard); }, 0);
    };
    TextInputComponent.prototype.createFullCopyOfArray = function (array) {
        var newArray = [];
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (typeof array[i] === 'object') {
                newArray.push(this.createFullCopyOfArray(array[i]));
            }
            else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    };
    TextInputComponent.prototype.checkForEmptyLookaround = function (parent, index) {
        if (typeof parent[index] === 'object' && parent[index][0] === '_') {
            return true;
        }
        return false;
    };
    TextInputComponent.prototype.getPathToElement = function (array, element, path) {
        if (array === element) {
            return true;
        }
        if (array instanceof Array) {
            var exists = false;
            for (var i = 0; i < array.length; i++) {
                exists = exists || this.getPathToElement(array[i], element, path);
                if (exists) {
                    path.push(i);
                    break;
                }
            }
            return exists;
        }
        return false;
    };
    TextInputComponent.prototype.deleteSelectedElements = function () {
        this.caretService.startBlinking();
        var selectedElements = this.selectionService.getHighlightedElements();
        if (selectedElements.length > 0) {
            var count = selectedElements.length;
            this.isInputFromKeyboard = false;
            this.inputFromKeyboard.direction = 'right';
            var inputTmp = this.deleteItemFromViewData(selectedElements[0], this.viewData);
            this.inputFromKeyboard.parent = inputTmp.parent;
            this.inputFromKeyboard.index = inputTmp.index - 1;
            for (var i = 1; i < count; i++) {
                this.deleteItemFromViewData(selectedElements[i], this.viewData);
            }
            this.allElPosService.removeSelection();
            this.selectionStart = null;
            this.selectionKeybStart = null;
            this.allElPosService.setMouseStart(null);
            this.selectGroup = false;
            this.hideMainEl(false);
            this.dataArrayService.informTextInpCompToRecompileDataFromViewData('key');
            return count;
        }
        return 0;
    };
    TextInputComponent.prototype.deleteItemFromViewData = function (item, viewData) {
        var result = { index: -1, parent: null };
        result.index = viewData.indexOf(item);
        if (result.index !== -1 && viewData !== 'quantifier' && typeof viewData === 'object') {
            result.parent = viewData;
            viewData.splice(result.index, 1);
            return result;
        }
        if (typeof viewData === 'object' && viewData.length > 0) {
            for (var i = 0; i < viewData.length; i++) {
                result = this.deleteItemFromViewData(item, viewData[i]);
                if (result.index !== -1) {
                    return result;
                }
            }
        }
        return result;
    };
    TextInputComponent.prototype.findItemInViewData = function (item, viewData) {
        var result = { index: -1, parent: null };
        result.index = viewData.indexOf(item);
        if (result.index !== -1) {
            result.parent = viewData;
            return result;
        }
        if (typeof viewData === 'object' && viewData.length > 0) {
            for (var i = 0; i < viewData.length; i++) {
                result = this.findItemInViewData(item, viewData[i]);
                if (result.index !== -1) {
                    return result;
                }
            }
        }
        return result;
    };
    TextInputComponent.prototype.closeSelectedElement = function () {
        this.selectedMainElement = null;
        this.elementService.elementClicked(undefined);
        this.elementToEdit = null;
        this.elementService.elementToEditClicked(false);
    };
    return TextInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('area'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], TextInputComponent.prototype, "areaRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('allElements'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object)
], TextInputComponent.prototype, "allElements", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('selectedElement'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object)
], TextInputComponent.prototype, "selectedElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _d || Object)
], TextInputComponent.prototype, "isHideMainEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleMouseUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleControls", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* HostListener */])('keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TextInputComponent.prototype, "handleKeyDown", null);
TextInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'text-input',
        template: __webpack_require__(206),
        styles: [__webpack_require__(188)],
        providers: [__WEBPACK_IMPORTED_MODULE_6__caret_service__["a" /* CaretService */], __WEBPACK_IMPORTED_MODULE_7__buffer_service__["a" /* BufferService */]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataArray_dataArray_service__["a" /* DataArrayService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__elements_element_service__["a" /* ElementService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__beauty_data_beauty_data_service__["a" /* BeautyDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__beauty_data_beauty_data_service__["a" /* BeautyDataService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__beauty_data_selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__beauty_data_selection_service__["a" /* SelectionService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_5__all_elements_position_service__["a" /* AllElementsPositionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__all_elements_position_service__["a" /* AllElementsPositionService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_6__caret_service__["a" /* CaretService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__caret_service__["a" /* CaretService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_7__buffer_service__["a" /* BufferService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__buffer_service__["a" /* BufferService */]) === "function" && _m || Object])
], TextInputComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=text-input.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".vire {\r\n    position: relative;\r\n    z-index: 0;\r\n    width: 660px;\r\n    min-height: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".mainElements {\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    position: absolute;\r\n    z-index: 10;\r\n    background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n    width: 367px;\r\n    height: 37px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border: 1px solid rgba(172, 172, 172, 1);\r\n    border-radius: 3px;\r\n    top: 15px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n}\r\n\r\n.mainElements:before, .mainElements:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 170.6px;\r\n    bottom: -13px;\r\n    border: 13px solid transparent;\r\n    border-top: 13px solid rgba(172, 172, 172, 1);\r\n    border-bottom: 0;\r\n}\r\n.mainElements:after {\r\n    border-top: 13px solid rgba(228, 228, 228, 1);\r\n    bottom: -12px;\r\n}\r\n\r\n.mainElements span {\r\n    display: block;\r\n    height: 11.4px;\r\n    width: auto;\r\n    border-radius: 10px;\r\n    min-width: 30px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-family: \"Lucida Grande\";\r\n    font-size: 14px;\r\n    line-height: 11px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.mainElements span:nth-child(1) {\r\n    margin-left: 8px;\r\n    padding: 4px  8px 4px 8px;\r\n    background: rgba(254, 224, 165, 1);\r\n    border: 1px solid rgba(208, 165, 84, 1);\r\n}\r\n\r\n.mainElements span:nth-child(1):hover {\r\n    box-shadow: 0 0 5px 2px rgba(254, 224, 165, 1);\r\n}\r\n\r\n.mainElements span:nth-child(2) {\r\n    margin-left: 5px;\r\n    padding: 4px  8px 4px 8px;\r\n    background: rgba(209, 233, 206, 1);\r\n    border: 1px solid rgba(161, 186, 158, 1);\r\n}\r\n\r\n.mainElements span:nth-child(2):hover {\r\n    box-shadow: 0 0 5px 2px rgba(209, 233, 206, 1);\r\n}\r\n\r\n.mainElements span:nth-child(3)::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -10px;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.mainElements span:nth-child(3)::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -1px;\r\n  left: -11px;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.mainElements span:nth-child(3)::before {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 11px 11px 11px 0;\r\n  border-color: transparent rgba(191, 191, 191, 1) transparent transparent;\r\n}\r\n\r\n.mainElements span:nth-child(3)::after {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent rgba(234, 234, 237, 1) transparent transparent;\r\n}\r\n\r\n.mainElements span:nth-child(3) {\r\n    position: relative;\r\n    margin-left: 14px;\r\n    padding: 4px  14px 4px 6px;\r\n    background: rgba(234, 234, 237, 1);\r\n    border: 1px solid rgba(191, 191, 191, 1);\r\n    border-left: none;\r\n    border-radius: 0 10px 10px 0;\r\n    /*border-left: none;*/\r\n    /*border-bottom-left-radius: 0;*/\r\n    /*border-top-left-radius: 0;*/\r\n}\r\n\r\n.mainElements span:nth-child(3):hover {\r\n    box-shadow: 0 0 5px 2px rgba(220, 220, 220, 1);\r\n}\r\n\r\n/*.mainElements span:nth-child(3):before,.mainElements span:nth-child(3):after {*/\r\n/*content: '';*/\r\n/*position: absolute;*/\r\n/*left: -10.4px;*/\r\n/*bottom: 0;*/\r\n/*top: -1px;*/\r\n/*border: 10.6px solid transparent;*/\r\n/*border-right: 10.5px solid rgba(191, 191, 191, 1);*/\r\n/*border-left: 0;*/\r\n/*}*/\r\n\r\n/*.mainElements span:nth-child(3):after {*/\r\n/*border-right: 10.5px solid rgba(234, 234, 237, 1);*/\r\n/*left: -9px;*/\r\n/*}*/\r\n\r\n.mainElements span:nth-child(4) {\r\n    margin-left: 4px;\r\n    padding: 4px  7px 4px 7px;\r\n    background: rgba(253, 252, 142, 1);\r\n    border: 1px solid rgba(206, 205, 68, 1);\r\n}\r\n\r\n.mainElements span:nth-child(4):hover {\r\n    box-shadow: 0 0 5px 2px rgba(253, 252, 142, 1);\r\n}\r\n\r\n.mainElements span:nth-child(5) {\r\n    box-sizing: border-box;\r\n    margin-left: 5px;\r\n    margin-right: 7px;\r\n    width: 33px;\r\n    height: 21px;\r\n    padding: 4px  8px 4px 8px;\r\n    background: rgba(234, 234, 237, 1);\r\n    border: 1px solid rgba(177, 176, 176, 1);\r\n\r\n}\r\n\r\n.mainElements span:nth-child(5):hover {\r\n    box-shadow: 0 0 5px 2px rgba(220, 220, 220, 1);\r\n}\r\n\r\n.mainHint {\r\n    position: absolute;\r\n    z-index: 2;\r\n    bottom: 6px;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    height: 22px;\r\n    background: transparent;\r\n}\r\n\r\n.mainHint span {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    height: 22px;\r\n    box-sizing: border-box;\r\n    background: rgba(64, 64, 64, 1);\r\n    border: 1px solid rgba(38, 38, 38, 1);\r\n    border-radius: 3px;\r\n    font-size: 11px;\r\n    color: rgba(236, 236, 236, 1);\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 9px;\r\n    padding: 6px 7px 0 7px;\r\n    cursor: default;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n  font-family: \"Lucida Grande\";\r\n}\r\n\r\nbeauty-data {\r\n  display: inline-block;\r\n  padding: 1px 1px 1px 0;                 /*distance between elements*/\r\n}\r\n\r\n.group, .or,\r\n.anchor, .anchorOpposite, .lookAhead, .lookBehind {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 3px 13px;\r\n  background-color: #dbdeff;\r\n  border: 1px solid #9aa2f5;\r\n  border-radius: 777px;\r\n  z-index: 5;\r\n  color: #000;\r\n}\r\n\r\n.group {\r\n  background-color: #d2e8cf;\r\n  border-color: #a1ba9e;\r\n}\r\n\r\n.or {\r\n  background: rgba(234, 234, 237, 1);\r\n  border: 1px solid rgba(177, 176, 176, 1);\r\n}\r\n\r\n.anchor, .anchorOpposite {\r\n  background: rgba(253, 252, 142, 1);\r\n  border: 1px solid rgba(206, 205, 68, 1);\r\n}\r\n\r\n\r\n.anchorOpposite.editing {\r\n  background-color: #8689e3;\r\n  color: #fff;\r\n}\r\n\r\n.anchor.editing {\r\n  background-color: #999cff;\r\n  color: #fff;\r\n}\r\n.anchorOpposite {\r\n  color: #fff;\r\n  background: rgba(173, 172, 84, 1);\r\n  border-color: rgba(109, 108, 27, 1)\r\n}\r\n\r\n.lookAhead.positive, .lookBehind.positive {\r\n  background-color: #e8e8eb;\r\n  border-color: #bfbfbf;\r\n  position: relative;\r\n  color: #000;\r\n}\r\n\r\n.lookAhead.negative, .lookBehind.negative {\r\n  background-color: #9c9c9c;\r\n  border-color: #767474;\r\n  position: relative;\r\n  color: #fff;\r\n}\r\n\r\n.lookAhead {\r\n  border-radius: 777px 0 0 777px;\r\n  border-right: none;\r\n  padding-right: 0;\r\n  margin-right: 10px;\r\n}\r\n\r\n.lookBehind {\r\n  border-radius: 0 777px 777px 0;\r\n  border-left: none;\r\n  padding-left: 0;\r\n  margin-left: 10px;\r\n}\r\n\r\n.arrowFill {\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.arrowFill::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -10px;\r\n  width: 10px;\r\n  height: 50%;\r\n  background: linear-gradient(to top left, #e8e8eb 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead.arrowFill::before {\r\n  left: 100%;\r\n  background: linear-gradient(to top right, #e8e8eb 50% , transparent 50%);\r\n}\r\n\r\n.arrowFill::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: -10px;\r\n  width: 10px;\r\n  height: 50%;\r\n  background: linear-gradient(to bottom left, #e8e8eb 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead.arrowFill::after {\r\n  left: 100%;\r\n  background: linear-gradient(to bottom right, #e8e8eb 50% , transparent 50%);\r\n}\r\n\r\n.negative.arrowFill::before {\r\n  background: linear-gradient(to top left, #9c9c9c 50% , transparent 50%);\r\n}\r\n\r\n.negative.arrowFill::after {\r\n  background: linear-gradient(to bottom left, #9c9c9c 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead.negative.arrowFill::before {\r\n  background: linear-gradient(to top right, #9c9c9c 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead.negative.arrowFill::after {\r\n  background: linear-gradient(to bottom right, #9c9c9c 50% , transparent 50%);\r\n}\r\n\r\n.arrowBorder {\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.arrowBorder::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -1px;\r\n  width: 11px;\r\n  height: 50%;\r\n  background: linear-gradient(to top left, #bfbfbf 50% , transparent 50%);\r\n\r\n}\r\n\r\n.triangleAhead.arrowBorder::before {\r\n  left: 100%;\r\n  -webkit-transform: translateX(-10px);\r\n          transform: translateX(-10px);\r\n  background: linear-gradient(to top right, #bfbfbf 50% , transparent 50%);\r\n}\r\n\r\n.arrowBorder::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: -1px;\r\n  width: 11px;\r\n  height: 50%;\r\n  background: linear-gradient(to bottom left, #bfbfbf 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead.arrowBorder::after {\r\n  left: 100%;\r\n  -webkit-transform: translateX(-10px);\r\n          transform: translateX(-10px);\r\n  background: linear-gradient(to bottom right, #bfbfbf 50% , transparent 50%);\r\n}\r\n\r\n.negative.arrowBorder::before {\r\n  background: linear-gradient(to top left, #767474 50% , transparent 50%);\r\n}\r\n\r\n.negative.arrowBorder::after {\r\n  background: linear-gradient(to bottom left, #767474 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead.negative.arrowBorder::before {\r\n  background: linear-gradient(to top right, #767474 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead.negative.arrowBorder::after {\r\n  background: linear-gradient(to bottom right, #767474 50% , transparent 50%);\r\n}\r\n\r\n.triangleAhead {\r\n  position: absolute;\r\n  left: 100%;\r\n}\r\n\r\n.editing>.arrowFill::before{\r\n   background: linear-gradient(to top left, #8689e3 50% , transparent 50%);\r\n }\r\n\r\n.editing>.arrowFill::after {\r\n  background: linear-gradient(to bottom left, #8689e3 50% , transparent 50%);\r\n}\r\n\r\n.editing>.triangleAhead.arrowFill::before{\r\n  background: linear-gradient(to top right, #8689e3 50% , transparent 50%);\r\n}\r\n\r\n.editing>.triangleAhead.arrowFill::after {\r\n  background: linear-gradient(to bottom right, #8689e3 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground {\r\n  background-color: rgb(118, 130, 245);\r\n  color: #fff;\r\n}\r\n\r\n.highlightSelectionBackground .wrapper>.group,\r\n.highlightSelectionBackground .wrapper>.or,\r\n.highlightSelectionBackground .wrapper>.anchor,\r\n.highlightSelectionBackground .wrapper>.anchorOpposite,\r\n.highlightSelectionBackground .wrapper>.lookAhead,\r\n.highlightSelectionBackground .wrapper>.lookBehind,\r\n.highlightSelectionBackground .wrapper>.quantifier {\r\n  background-color: rgb(118, 130, 245);\r\n  border-color: rgb(64, 78, 213);\r\n  color: #fff;\r\n}\r\n\r\n.highlightSelectionBackground .arrowBorder::before{\r\n  background: linear-gradient(to top left, rgb(64, 78, 213) 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground .arrowBorder::after {\r\n  background: linear-gradient(to bottom left, rgb(64, 78, 213) 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground .triangleAhead.arrowBorder::before{\r\n  background: linear-gradient(to top right, rgb(64, 78, 213) 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground .triangleAhead.arrowBorder::after {\r\n  background: linear-gradient(to bottom right, rgb(64, 78, 213) 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground .arrowFill::before{\r\n  background: linear-gradient(to top left, rgb(118, 130, 245) 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground .arrowFill::after {\r\n  background: linear-gradient(to bottom left, rgb(118, 130, 245) 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground .triangleAhead.arrowFill::before{\r\n  background: linear-gradient(to top right, rgb(118, 130, 245) 50% , transparent 50%);\r\n}\r\n\r\n.highlightSelectionBackground .triangleAhead.arrowFill::after {\r\n  background: linear-gradient(to bottom right, rgb(118, 130, 245) 50% , transparent 50%);\r\n}\r\n\r\n.space {\r\n  color: transparent;\r\n  caret-color: black;\r\n}\r\n\r\n.anchor, .anchorOpposite {\r\n  cursor: pointer;\r\n}\r\n\r\n.or {\r\n  cursor: default;\r\n}\r\n\r\nquantifier {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-23px, -50%);\r\n          transform: translate(-23px, -50%);\r\n  z-index: -1;\r\n  white-space: nowrap;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  height: 100%;\r\n}\r\n\r\nquantifier.ready {\r\n  -webkit-transform: translate(-100%, -50%);\r\n          transform: translate(-100%, -50%);\r\n  z-index: 0;\r\n}\r\n\r\n.quantifierSpace {\r\n  display: inline-block;\r\n}\r\n\r\nbeauty-data > div {\r\n  position: relative;\r\n}\r\n\r\n.editing:not(.range), .lookAhead.editing, .lookBehind.editing {\r\n  background-color: #8689e3;\r\n  color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div {\r\n  display: inline-block;\r\n  padding: 3px;\r\n  color: #000;\r\n  background-color: transparent;\r\n  z-index: 4;\r\n  cursor: default;\r\n  vertical-align: middle;\r\n}\r\n\r\ndiv.data {\r\n  padding: 0;\r\n}\r\n\r\ndiv.hovered {\r\n  border-radius: 0 777px 777px 0;\r\n  padding-left: 25px;\r\n  border: 1px solid #f59999;\r\n  background-color: #ffdadd;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  border-left: none;\r\n}\r\n\r\ndiv.hovered.highlightselectionbackground {\r\n  background-color: rgb(118, 130, 245);\r\n  border-color: rgb(64, 78, 213);\r\n  color: #fff;\r\n}\r\n\r\n.quantifierContent {\r\n  position: relative;\r\n  display: block;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.quantifierItems {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  width: 100%;\r\n}\r\n\r\n.quantifierItems > span {\r\n  display: inline-block;\r\n  width: 38px;\r\n  height:18px;\r\n  line-height: 18px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  background-color: #ffdadd;\r\n  border: 1px solid #f59999;\r\n  border-radius: 777px;\r\n  cursor: pointer;\r\n}\r\n\r\n.quantifierItems > span:hover {\r\n  box-shadow:0 0 2px 2px #ffdadd;\r\n}\r\n\r\n.hovered {\r\n  position: relative;\r\n  color: #000;\r\n}\r\n\r\n.hovered > span {\r\n  cursor: pointer;\r\n}\r\n\r\n.hovered:hover {\r\n  background-color: #ffe6e7;\r\n}\r\n\r\n.hovered.clicked {\r\n  background-color: #8689e3;\r\n  border: 1px solid #f59999;\r\n  color: #fff;\r\n}\r\n\r\n.quantifierSelect {\r\n  width: 285px;\r\n  height: 50px;\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  top: 100%;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  margin: 12px auto 0 auto;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n}\r\n\r\n.quantifierSelect:before, .quantifierSelect:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -12px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin:0 auto;\r\n  width: 0;\r\n}\r\n.quantifierSelect:after {\r\n  border-bottom: 12px solid rgba(238, 238, 238, 1);\r\n  top: -11px;\r\n}\r\n\r\n.quantifierItems span {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=number] {\r\n  width: 55px;\r\n}\r\n\r\n.quantifierEdit {\r\n  padding: 0;\r\n  width: 100%;\r\n}\r\n\r\n.quantity {\r\n  position: relative;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button\r\n{\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number]\r\n{\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.quantity input {\r\n  height: 19px;\r\n  width: 36px;\r\n  padding: 0;\r\n  float: left;\r\n  text-align: center;\r\n  border: 1px solid #606464;\r\n}\r\n\r\n.quantity input:focus {\r\n  outline: 0;\r\n}\r\n\r\n.quantity-nav {\r\n  float: left;\r\n  height: 19px;\r\n  width: 15px;\r\n  padding: 0;\r\n  border: 1px solid #fff;\r\n  position: relative;\r\n}\r\n\r\n.quantity-button {\r\n  width: 100%;\r\n  height: 9px;\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  border: 1px solid #abadb3;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n  background: linear-gradient(to bottom, #fcfcfc, #d1d1d1);\r\n  cursor: pointer;\r\n}\r\n\r\n.quantity-button.quantity-up {\r\n  top: 0;\r\n}\r\n\r\n.quantity-button.quantity-up>div{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  padding: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 0 2.5px 3px 2.5px;\r\n  border-color: transparent transparent #7085d1 transparent;\r\n  cursor: pointer;\r\n}\r\n\r\n.quantity-button.quantity-down {\r\n  bottom: 0;\r\n}\r\n\r\n.quantity-button.quantity-down>div{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n  padding: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 3px 2.5px 0 2.5px;\r\n  border-color: #7085d1 transparent transparent transparent;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".rangeItem, .rangeItemShort {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 3px 6px;\r\n  background-color: #dbdeff;\r\n  border: 1px solid #9aa2f5;\r\n  z-index: 5;\r\n  color: #000;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n  font-family: \"Lucida Grande\";\r\n  border-right: none;\r\n}\r\n\r\n.editing.rangeItem, .editing.rangeItemShort {\r\n  background-color: #8689e3;\r\n  color: #fff;\r\n}\r\n\r\n.highlightSelectionBackground.rangeItem, .highlightSelectionBackground.rangeItemShort {\r\n  background-color: rgb(118, 130, 245);\r\n  border-color: rgb(64, 78, 213);\r\n  color: #fff;\r\n}\r\n\r\n.rangeItem:first-child, .rangeItemShort:first-child {\r\n  border-radius: 777px 0 0 777px;\r\n  padding-left: 13px;\r\n}\r\n\r\n.rangeItem:last-child, .rangeItemShort:nth-last-child(2){\r\n  border-radius:  0 777px 777px 0;\r\n  padding-right: 13px;\r\n  border-right: 1px solid #9aa2f5;\r\n}\r\n\r\n.rangeItem:first-child:last-child {\r\n  border-radius: 777px;\r\n  padding: 3px 13px;\r\n}\r\n\r\n\r\n\r\n.negative {\r\n  color: #fff;\r\n  border-color: #2e38ab;\r\n  background-color: #8587e5;\r\n}\r\n\r\n.wrapper {\r\n  white-space: nowrap;\r\n}\r\n\r\n.hiddenData {\r\n  display: none;\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  z-index: 1000;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n  top: 35px;\r\n}\r\n\r\n.hiddenData:before, .hiddenData:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -13px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin:0 auto;\r\n  width: 0;\r\n}\r\n\r\n.hiddenData:after {\r\n  border-bottom: 12px solid rgba(243, 243, 243, 1);\r\n  top: -12px;\r\n}\r\n\r\ndiv:hover .hiddenData:not(.hidden) {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".selectedElement {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 3px;\r\n  background: rgba(118, 130, 247, 1);\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  color: #fff;\r\n  border-radius: 9999px;\r\n  z-index: 5;\r\n  cursor: pointer;\r\n}\r\n\r\n.Lookaround {\r\n  border-left: none;\r\n  margin-left: 11px;\r\n  border-radius: 0 9999px 9999px 0;\r\n}\r\n\r\n.Lookaround::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: -10px;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.Lookaround::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -1px;\r\n  left: -11px;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.Lookaround::before {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 11px 11px 11px 0;\r\n  border-color: transparent rgba(64, 78, 213, 1) transparent transparent;\r\n}\r\n\r\n.Lookaround::after {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent rgba(118, 130, 247, 1) transparent transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div {\r\n  color: black;\r\n  font-size: 16px;\r\n  line-height: 14px;\r\n  white-space: nowrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".toggle {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -100%);\r\n          transform: translate(-50%, -100%);\r\n  white-space: nowrap;\r\n}\r\n\r\n.wrapper {\r\n  padding: 10px;\r\n}\r\n\r\ntextarea {\r\n  display: block;\r\n  min-width: 300px;\r\n  min-height: 50px;\r\n}\r\n\r\n.submit {\r\n  margin: 10px 0;\r\n  float: left;\r\n}\r\n\r\n.copy {\r\n  margin: 10px 0;\r\n  float: right;\r\n}\r\n\r\n.modalDialog {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 50%;\r\n  display: none;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n\r\n.modalDialog p {\r\n  margin: 0;\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.modalDialog > div {\r\n  position: relative;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n  background: #ffcede;\r\n}\r\n\r\n.close {\r\n  outline: none;\r\n  border: 1px solid black;\r\n  width: 12px;\r\n  height: 12px;\r\n  line-height: 10px;\r\n  padding: 0;\r\n  background: #606061;\r\n  color: #FFFFFF;\r\n  font-size: 7px;\r\n  position: absolute;\r\n  text-align: center;\r\n  right: -4px;\r\n  top: -4px;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.close:hover { background: #00d9ff; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "div > div {\r\n  text-align: left;\r\n  margin-bottom: 8px;\r\n}\r\n\r\ndiv > div:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\ndiv .symbol {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 26px;\r\n  height: 19px;\r\n  margin-top: -3px;\r\n  margin-right: 10px;\r\n  background: rgba(253, 252, 142, 1);\r\n  border: 1px solid rgba(206, 205, 68, 1);\r\n  border-radius: 9999px;\r\n  color: #000;\r\n  vertical-align: middle;\r\n}\r\n\r\ndiv div:nth-child(2) .symbol {\r\n  color: #fff;\r\n  background: rgba(173, 172, 84, 1);\r\n  border-color: rgba(109, 108, 27, 1)\r\n}\r\n\r\ndiv div:nth-child(n+3) .symbol {\r\n  font-size: 16px;\r\n}\r\n\r\ndiv .text {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 21px;\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 14px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  display: inline-block;\r\n  width: 99px;\r\n  height: 19px;\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\nspan:nth-child(odd) {\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\nspan:nth-child(even) {\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  border-left: none;\r\n}\r\n\r\n.purple {\r\n  background: linear-gradient(to bottom, #929bf6, #6471f2);\r\n  color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n  background: linear-gradient(to bottom, #c7cbf8, #b1b6f5);\r\n  color: #000;\r\n}\r\n\r\nspan.showOneItem {\r\n  display: inline-block;\r\n  height: 21px;\r\n  width: 130px;\r\n  background-color: #57cc45;\r\n  color: #fff;\r\n  border: 1px solid #57cc45;\r\n  border-bottom-left-radius: 8px;\r\n  border-top-left-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n  line-height: 20px;\r\n}\r\n\r\n.disabled span:first-child, .disabledLast span:last-child, .showOneItem.disabled {\r\n  background: #AEAEAE;\r\n  color: grey;\r\n  border-color: grey;\r\n  cursor: default;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  display: inline-block;\r\n  width: 99px;\r\n  height: 19px;\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  cursor: pointer;\r\n}\r\n\r\nspan:nth-child(odd) {\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\nspan:nth-child(even) {\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  border-left: none;\r\n}\r\n\r\ndiv div {\r\n  margin-bottom: 8px;\r\n}\r\n\r\ndiv div:nth-child(3) {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.addLookaround {\r\n  width: 198px;\r\n  background: linear-gradient(to bottom, rgba(228, 202, 244, 1), rgba(190, 168, 203, 1));\r\n  color: #000;\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.changeLookaround {\r\n  background: linear-gradient(to bottom, rgba(228, 202, 244, 1), rgba(190, 168, 203, 1));\r\n  color: #000;\r\n}\r\n\r\n.deleteLookaround {\r\n  background: linear-gradient(to bottom, rgba(248, 202, 244, 1), rgba(210, 168, 203, 1));\r\n  color: #000;\r\n}\r\n\r\n.purple {\r\n  background: linear-gradient(to bottom, #929bf6, #6471f2);\r\n  color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n  background: linear-gradient(to bottom, #c7cbf8, #b1b6f5);\r\n  color: #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  box-sizing: border-box;\r\n  display: block;\r\n  float: left;\r\n  background: rgba(225, 225, 225, 1);\r\n  width: 27px;\r\n  height: 16px;\r\n  margin: 1px;\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\nspan:hover,.hoveredElement {\r\n  box-shadow: inset 0 0 30px rgba(189, 193, 228, 1);\r\n  border: 1px solid rgba(202, 204, 234, 1);\r\n}\r\n\r\n.selectedElement {\r\n  background: rgba(118, 130, 247, 1);\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  color: #fff;\r\n}\r\n\r\n.selectedElement:hover {\r\n  box-shadow: none;\r\n  border-color: rgba(64, 78, 213, 1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  display: inline-block;\r\n  width: 99px;\r\n  line-height: 19px;\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 13px;\r\n  cursor: pointer;\r\n}\r\nspan:first-child {\r\n  border-bottom-left-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\nspan:last-child {\r\n  border-bottom-right-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  border-left: none;\r\n}\r\n\r\n.purple {\r\n  background: linear-gradient(to bottom, #929bf6, #6471f2);\r\n  color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n  background: linear-gradient(to bottom, #c7cbf8, #b1b6f5);\r\n  color: #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  background: rgba(254, 224, 165, 1);\r\n  border: 1px solid rgba(208, 165, 84, 1);\r\n  border-radius: 9999px;\r\n  width: 25px;\r\n  height: 19px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  margin-right: 4px;\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 11px;\r\n  cursor: pointer;\r\n}\r\n\r\nspan:hover {\r\n  box-shadow: 0 0 5px 2px rgba(254, 224, 165, 1);\r\n}\r\n\r\nspan:last-child {\r\n  margin-right: 0px;\r\n}\r\n\r\n.selectedElement {\r\n  background: rgba(118, 130, 247, 1);\r\n  border: 1px solid rgba(64, 78, 213, 1);\r\n  color: #fff;\r\n}\r\n\r\n.selectedElement:hover {\r\n  box-shadow: none;\r\n  border-color: rgba(64, 78, 213, 1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "span {\r\n    font-family: \"Lucida Grande\";\r\n    font-size: 11px;\r\n    cursor: pointer;\r\n}\r\n.top{\r\n    height: 37px;\r\n    background: rgba(242, 242, 242, 1);\r\n    border-bottom: 1px solid rgba(173, 173, 173, 1);\r\n}\r\n\r\n.search {\r\n    display: inline-block;\r\n    width: 215px;\r\n    padding-left: 9px;\r\n    margin-right: 8px;\r\n    margin-top: 9px;\r\n}\r\n\r\n.posNeg {\r\n    display: inline-block;\r\n    width: 208px;\r\n    margin-right: 8px;\r\n}\r\n\r\n.purple {\r\n    background: rgba(141, 150, 245, 1);\r\n    color: #fff;\r\n}\r\n\r\n.brightPurple {\r\n    background: rgba(180, 186, 248, 1);\r\n    color: #000;\r\n}\r\n\r\n.ASCII {\r\n    margin-top: 1px;\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.ASCII span {\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    background: rgba(225, 225, 225, 1);\r\n    width: 27px;\r\n    height: 16px;\r\n    margin: 1px;\r\n}\r\n\r\n.ASCII span:hover,.hoveredElement {\r\n    box-shadow: inset 0 0 30px rgba(189, 193, 228, 1);\r\n    border: 1px solid rgba(202, 204, 234, 1);\r\n}\r\n.top, .posNeg {\r\n  white-space: nowrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".edit {\r\n  margin-top: 30px;\r\n}\r\n\r\n.hint {\r\n    position: absolute;\r\n    z-index: 2;\r\n    top: 6px;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    height: 22px;\r\n    background: transparent;\r\n}\r\n\r\n.hint span {\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n    height: 22px;\r\n    box-sizing: border-box;\r\n    background: rgba(64, 64, 64, 1);\r\n    border: 1px solid rgba(38, 38, 38, 1);\r\n    border-radius: 3px;\r\n    font-size: 11px;\r\n    color: rgba(236, 236, 236, 1);\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 9px;\r\n    padding: 6px 7px 0 7px;\r\n    cursor: default;\r\n}\r\n\r\n.data {\r\n  display: none;\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: linear-gradient(to bottom, rgba(243, 243, 243, 1), rgba(228, 228, 228, 1) );\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  z-index: 1000;\r\n  box-shadow:0 1px 4px 1px rgba(218, 218, 218, 1);\r\n}\r\n\r\n.data:before, .data:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: -13px;\r\n    border: 12px solid transparent;\r\n    border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n    border-top: 0;\r\n    margin:0 auto;\r\n    width: 0;\r\n}\r\n.data:after {\r\n    border-bottom: 12px solid rgba(238, 238, 238, 1);\r\n    top: -12px;\r\n}\r\n\r\n.data span {\r\n    cursor: pointer;\r\n}\r\n\r\n.Group, .Lookaround {\r\n    width: 215px;\r\n}\r\n.Range {\r\n    width: 466px;\r\n    padding: 0;\r\n}\r\n\r\n.Anchors {\r\n    width: 196px;\r\n    cursor: pointer;\r\n}\r\n\r\n.Quantifier {\r\n  width: 285px;\r\n  height: 50px;\r\n  padding: 9px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".area{\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    min-height: 160px;\r\n    background: #fff;\r\n    padding: 67px 0 30px 0;\r\n    border: 1px solid rgba(192, 210, 232, 1);\r\n    resize: vertical;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n    cursor: text;\r\n}\r\n.area:focus {\r\n    outline: none;\r\n}\r\n.area:empty {\r\n    padding-top: 67px;\r\n}\r\n\r\n.regExp {\r\n    position: absolute;\r\n    top: -100px;\r\n    background: yellow;\r\n    color: black;\r\n}\r\n\r\n.regExpInput {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 50px);\r\n          transform: translate(-50%, 50px);\r\n  background: lightskyblue;\r\n  color: black;\r\n}\r\n\r\n.data {\r\n  font-family: \"Lucida Grande\";\r\n  font-size: 14px;\r\n  position: absolute;\r\n  background: rgba(238, 238, 238, 1);\r\n  border: 1px solid rgba(201, 201, 201, 1);\r\n  border-radius: 3px;\r\n  padding: 9px;\r\n  margin: 43px auto 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.data:before, .data:after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: -12px;\r\n  border: 12px solid transparent;\r\n  border-bottom: 12px solid rgba(201, 201, 201, 1);\r\n  border-top: 0;\r\n  margin:0 auto;\r\n  width: 0;\r\n}\r\n\r\n.data:after {\r\n  border-bottom: 12px solid rgba(238, 238, 238, 1);\r\n  top: -11px;\r\n}\r\n\r\n.data span {\r\n  cursor: pointer;\r\n}\r\n\r\n.Group, .Lookaround {\r\n  width: 150px;\r\n  height: 20px;\r\n}\r\n\r\ncaret {\r\n  position: absolute;\r\n  font-size: 14px;\r\n  z-index: 100;\r\n  pointer-events:none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */,
/* 190 */
/***/ (function(module, exports) {

module.exports = "<div class=\"vire\" (mouseup)=\"deleteStartSelection()\">\r\n    <main-elements *ngIf=\"!selectedMainElement && !elementToEdit && !isHideMainEl\"></main-elements>\r\n    <text-input (isHideMainEl)=\"hideMainElements($event)\"></text-input>\r\n</div>\r\n"

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainElements\" *ngIf=\"displayMainEl\">\r\n    <span *ngFor=\"let element of elements | slice:1\" (mouseover)=\"onMouseOver(element)\"\r\n          (mouseout)=\"onMouseOut()\" (click)=\"onSelect(element)\">\r\n        {{element.name}}\r\n    </span>\r\n</div>\r\n<div *ngIf=\"hoveredElement\" class=\"mainHint\">\r\n    <span>{{hoveredElement.hint}}</span>\r\n</div>\r\n<div *ngIf=\"!hoveredElement\" class=\"mainHint\">\r\n    <span>{{ customHint || STATICHINT }}</span>\r\n</div>\r\n"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (mouseenter)=\"showQuantifier($event, true)\" (mouseleave)=\"showQuantifier($event, false)\" #element><!--\r\n\r\n  --><div *ngIf=\"currentClass.indexOf('look')!== -1\"\r\n       class=\"arrowBorder {{ currentClass.indexOf('negative') !== -1 ? 'negative' : ''}}\r\n        {{ currentClass.indexOf('lookAhead') !== -1 ? 'triangleAhead' : ''}}\"></div><!--\r\n\r\n  --><div #currEl class=\"beautyData {{ currentClass.length > 0 ? currentClass : ''}}\"\r\n       (dblclick)=\"handleClickToEdit($event)\" (mousedown)=\"handleMouseDown($event)\"\r\n       (mouseup)=\"handleMouseUp($event)\" (mouseenter)=\"handleMouseEnterForSelection($event)\"><!--\r\n\r\n    --><div *ngIf=\"currentClass.indexOf('look')!== -1\"\r\n         class=\"arrowFill {{ currentClass.indexOf('negative') !== -1 ? 'negative' : ''}}\r\n          {{ currentClass.indexOf('lookAhead') !== -1 ? 'triangleAhead' : ''}}\"></div><!--\r\n\r\n    --><div *ngIf=\"viewData[0] !== 'range'\"><span *ngFor=\"let datum of viewData | slice: sliceNumber\" (mousedown)=\"preventDefault($event)\"\r\n         class=\"beautyData\"><!--\r\n      --><beauty-data *ngIf=\"!checkIfString(datum) && datum[0] !== 'main-element' && datum[0] !== 'quantifier'\"\r\n                  class=\"{{selectionData.indexOf(datum) !== -1 ? 'highlightSelectionBackground' : ''}}\"\r\n                  [viewData]=\"datum\"\r\n                  [parentData]=\"viewData\"\r\n                  [hideAllQuantifiers]=\"hideAllQuantifiers\"\r\n                  (passViewDataHigher)=\"handleInnerViewData($event)\"\r\n                  (toggleGlobalQuantClicked)=\"passClickedStatusHigher($event)\"\r\n                  (hideParentQuantifier)=\"hideQuantifier($event)\"\r\n                  (passSelectedElementPosition) = \"passSelectedElementPosition.emit($event)\"></beauty-data><!--\r\n      --><span *ngIf=\"checkIfString(datum) && datum[0] !== 'main-element' && datum[0] !== '\\\\'\" class=\"singleSymbol\" (mousedown)=\"preventDefault($event)\">{{datum}}</span><!--\r\n      --><span *ngIf=\"checkIfString(datum) && datum[0] !== 'main-element' && datum[0] === '\\\\'\" class=\"singleSymbol\" (mousedown)=\"preventDefault($event)\">{{datum.slice(1)}}</span><!--\r\n      --><selected-element-view *ngIf=\"datum[0] === 'main-element'\" [elementName] = datum[1]\r\n          (passSelectedElementPosition) = \"passSelectedElementPosition.emit($event)\"></selected-element-view><!--\r\n    --></span></div><!--\r\n\r\n    --><range-beauty-data *ngIf=\"viewData[0] === 'range'\" [viewData]=\"viewData | slice: sliceNumber\"\r\n                          [class]=\"currentClass + (selectionData.indexOf(viewData) !== -1 ? ' highlightSelectionBackground' : '')\"></range-beauty-data><!--\r\n  --></div><!--\r\n  --><span *ngIf=\"viewData.length > 0 && viewData[viewData.length - 1][0] === 'quantifier'\" #quantifierSpace class=\"quantifierSpace\"></span><!--\r\n  --><quantifier *ngIf=\"viewData.length > 0 && viewData[viewData.length - 1][0] === 'quantifier'\"\r\n                 [viewData]=\"viewData[viewData.length - 1]\"\r\n                 [editable]=\"!hideAllQuantifiers\" class=\"ready\"\r\n                 [highlightSelectionBackground]=\"selectionData.indexOf(viewData) !== -1\"></quantifier><!--\r\n  --><quantifier *ngIf=\"currentClass.length > 0\r\n                     && ( hovered || alwaysShowQuantifier)\r\n                     && isShowQuantifier\r\n                     && !hideAllQuantifiers\"\r\n              (sendDataToGlobalArray)=\"handleDataFromQuantifier($event)\"\r\n              (globalQuantifierClicked)=\"handleQuantifierClicked($event)\"></quantifier><!--\r\n--></div>\r\n"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<div class=\"hovered {{cssClass}} {{highlightSelectionBackground ? ' highlightselectionbackground':''}}\" *ngIf=\"hovered && !dataToEdit\" [ngClass]=\"{'cross': !selectedQuantifier}\"\r\n     (mouseover)=\"handleHoverGlobal(true)\" (mouseout)=\"handleHoverGlobal(false)\"\r\n     (click)=\"handleClickOnHovered($event)\" (mousedown)=\"eventStopPropagation($event)\" (dblclick)=\"handleDoubleClick($event)\"><!--\r\n\r\n  --><span class=\"quantifierContent\" (mousedown)=\"preventDefault($event)\" *ngIf=\"!selectedQuantifier && !viewData\">x</span><!--\r\n  --><span class=\"quantifierContent\" *ngIf=\"selectedQuantifier && !viewData\">{{selectedQuantifier.name}}</span><!--\r\n  --><span class=\"quantifierContent\" (mousedown)=\"preventDefault($event)\" *ngIf=\"viewData\">{{viewData.slice(1).join('')}}</span><!--\r\n\r\n  --><div *ngIf=\"clicked\" class=\"quantifierSelect\"><!--\r\n\r\n    --><div class=\"quantifierItems\"><!--\r\n      --><span *ngFor=\"let datum of quantifierData\" (click)=\"handleQuantifierDataClick($event, datum)\">{{datum.name}}</span><!--\r\n    --></div><!--\r\n\r\n    --><div class=\"data\"><!--\r\n\r\n      --><span *ngIf=\"!selectedQuantifier || selectedQuantifierId < 3\">Select prefered quantifier</span><!--\r\n\r\n      --><div *ngIf=\"selectedQuantifierId === 3\" ><!--\r\n        --><span>Matches exactly </span><!--\r\n        --><div class=\"quantity\"><input #input1 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\"\r\n                                        (ngModelChange)=\"setStartEndRange(3, $event, endRange)\"\r\n                                        (click)=\"eventStopPropagation($event)\"\r\n                                        (mousedown)=\"eventStopPropagation($event)\"\r\n                                        (mouseup)=\"eventStopPropagation($event)\"\r\n                                        (keydown)=\"eventStopPropagation($event)\"\r\n                                        (keypress)=\"eventStopPropagation($event)\"\r\n                                        (mousemove)=\"eventStopPropagation($event)\"><!--\r\n           --><div class=\"quantity-nav\"><!--\r\n             --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input1)\"><div></div></span><!--\r\n             --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input1)\"><div></div></span><!--\r\n           --></div><!--\r\n        --></div><!--\r\n        --><span> times</span><!--\r\n      --></div><!--\r\n\r\n      --><div *ngIf=\"selectedQuantifierId === 4\"><!--\r\n        --><span>Matches from </span><!--\r\n        --><div class=\"quantity\"><input #input2 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\"\r\n                                        (ngModelChange)=\"setStartEndRange(4, $event, endRange)\"\r\n                                        (click)=\"eventStopPropagation($event)\"\r\n                                        (mousedown)=\"eventStopPropagation($event)\"\r\n                                        (mouseup)=\"eventStopPropagation($event)\"\r\n                                        (keydown)=\"eventStopPropagation($event)\"\r\n                                        (keypress)=\"eventStopPropagation($event)\"\r\n                                        (mousemove)=\"eventStopPropagation($event)\"><!--\r\n           --><div class=\"quantity-nav\"><!--\r\n             --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input2)\"><div></div></span><!--\r\n             --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input2)\"><div></div></span><!--\r\n           --></div><!--\r\n        --></div><!--\r\n        --><span> to infinity</span><!--\r\n      --></div><!--\r\n\r\n      --><div *ngIf=\"selectedQuantifierId === 5\"><!--\r\n        --><span>Matches from </span><!--\r\n        --><div class=\"quantity\"><input #input3 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\"\r\n                                        (ngModelChange)=\"setStartEndRange(5, $event, endRange)\"\r\n                                        (click)=\"eventStopPropagation($event)\"\r\n                                        (mousedown)=\"eventStopPropagation($event)\"\r\n                                        (mouseup)=\"eventStopPropagation($event)\"\r\n                                        (keydown)=\"eventStopPropagation($event)\"\r\n                                        (keypress)=\"eventStopPropagation($event)\"\r\n                                        (mousemove)=\"eventStopPropagation($event)\"><!--\r\n           --><div class=\"quantity-nav\"><!--\r\n             --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input3, input4)\"><div></div></span><!--\r\n             --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input3, input4)\"><div></div></span><!--\r\n           --></div><!--\r\n        --></div><!--\r\n        --><span> to </span><!--\r\n        --><div class=\"quantity\"><input #input4 type=\"number\" min=\"0\" [(ngModel)]=\"endRange\"\r\n                                        (ngModelChange)=\"setStartEndRange(5, startRange, $event)\"\r\n                                        (click)=\"eventStopPropagation($event)\"\r\n                                        (mousedown)=\"eventStopPropagation($event)\"\r\n                                        (mouseup)=\"eventStopPropagation($event)\"\r\n                                        (keydown)=\"eventStopPropagation($event)\"\r\n                                        (keypress)=\"eventStopPropagation($event)\"\r\n                                        (mousemove)=\"eventStopPropagation($event)\"><!--\r\n           --><div class=\"quantity-nav\"><!--\r\n             --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input4)\"><div></div></span><!--\r\n             --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input4)\"><div></div></span><!--\r\n           --></div><!--\r\n      --></div><!--\r\n      --></div><!--\r\n\r\n    --></div><!--\r\n\r\n  --></div><!--\r\n\r\n--></div><!--\r\n--><div *ngIf=\"dataToEdit\" class=\"quantifierEdit\"><!--\r\n\r\n  --><div class=\"quantifierItems\"><!--\r\n    --><span *ngFor=\"let datum of quantifierData\" (click)=\"handleQuantifierDataClick($event, datum)\">{{datum.name}}</span><!--\r\n  --></div><!--\r\n\r\n  --><div class=\"data\"><!--\r\n\r\n    --><span *ngIf=\"!selectedQuantifier || selectedQuantifierId < 3\">Select prefered quantifier</span><!--\r\n\r\n    --><div *ngIf=\"selectedQuantifierId === 3\" ><!--\r\n      --><span>Matches exactly </span><!--\r\n      --><div class=\"quantity\"><input #input5 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\"\r\n             (ngModelChange)=\"setStartEndRange(3, $event, endRange)\"\r\n             (click)=\"eventStopPropagation($event)\"\r\n             (mousedown)=\"eventStopPropagation($event)\"\r\n             (mouseup)=\"eventStopPropagation($event)\"\r\n             (keydown)=\"eventStopPropagation($event)\"\r\n             (keypress)=\"eventStopPropagation($event)\"\r\n             (mousemove)=\"eventStopPropagation($event)\"><!--\r\n         --><div class=\"quantity-nav\"><!--\r\n           --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input5)\"><div></div></span><!--\r\n           --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input5)\"><div></div></span><!--\r\n         --></div><!--\r\n      --></div><!--\r\n      --><span> times</span><!--\r\n    --></div><!--\r\n\r\n    --><div *ngIf=\"selectedQuantifierId === 4\"><!--\r\n      --><span>Matches from </span><!--\r\n      --><div class=\"quantity\"><input #input6 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\"\r\n             (ngModelChange)=\"setStartEndRange(4, $event, endRange)\"\r\n             (click)=\"eventStopPropagation($event)\"\r\n             (mousedown)=\"eventStopPropagation($event)\"\r\n             (mouseup)=\"eventStopPropagation($event)\"\r\n             (keydown)=\"eventStopPropagation($event)\"\r\n             (keypress)=\"eventStopPropagation($event)\"\r\n             (mousemove)=\"eventStopPropagation($event)\"><!--\r\n         --><div class=\"quantity-nav\"><!--\r\n           --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input6)\"><div></div></span><!--\r\n           --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input6)\"><div></div></span><!--\r\n         --></div><!--\r\n      --></div><!--\r\n      --><span> to infinity</span><!--\r\n    --></div><!--\r\n\r\n    --><div *ngIf=\"selectedQuantifierId === 5\"><!--\r\n      --><span>Matches from </span><!--\r\n      --><div class=\"quantity\"><input #input7 type=\"number\" min=\"0\" [(ngModel)]=\"startRange\"\r\n             (ngModelChange)=\"setStartEndRange(5, $event, endRange)\"\r\n             (click)=\"eventStopPropagation($event)\"\r\n             (mousedown)=\"eventStopPropagation($event)\"\r\n             (mouseup)=\"eventStopPropagation($event)\"\r\n             (keydown)=\"eventStopPropagation($event)\"\r\n             (keypress)=\"eventStopPropagation($event)\"\r\n             (mousemove)=\"eventStopPropagation($event)\"><!--\r\n         --><div class=\"quantity-nav\"><!--\r\n           --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input7, input8)\"><div></div></span><!--\r\n           --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input7, input8)\"><div></div></span><!--\r\n         --></div><!--\r\n      --></div><!--\r\n      --><span> to </span><!--\r\n      --><div class=\"quantity\"><input #input8 type=\"number\" min=\"0\" [(ngModel)]=\"endRange\"\r\n             (ngModelChange)=\"setStartEndRange(5, startRange, $event)\"\r\n             (click)=\"eventStopPropagation($event)\"\r\n             (mousedown)=\"eventStopPropagation($event)\"\r\n             (mouseup)=\"eventStopPropagation($event)\"\r\n             (keydown)=\"eventStopPropagation($event)\"\r\n             (keypress)=\"eventStopPropagation($event)\"\r\n             (mousemove)=\"eventStopPropagation($event)\"><!--\r\n         --><div class=\"quantity-nav\"><!--\r\n           --><span class=\"quantity-button quantity-up\" (click)=\"increaseValue(input8)\"><div></div></span><!--\r\n           --><span class=\"quantity-button quantity-down\" (click)=\"decreaseValue(input8)\"><div></div></span><!--\r\n         --></div><!--\r\n    --></div><!--\r\n    --></div><!--\r\n\r\n  --></div><!--\r\n\r\n--></div>\r\n"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!showDataShort\">\r\n  <span *ngFor=\"let datum of showData\" (mousedown)=\"preventDefault($event)\" class=\"rangeItem\" [ngClass]=\"class\">\r\n    <div *ngIf=\"isObject(datum)\">\r\n      <span *ngFor=\"let subDatum of datum | slice: sliceNumber\" (mousedown)=\"preventDefault($event)\">\r\n        {{subDatum}}\r\n      </span>\r\n    </div>\r\n    <div *ngIf=\"!isObject(datum)\">\r\n      {{datum}}\r\n    </div>\r\n  </span>\r\n</div>\r\n\r\n<div *ngIf=\"showDataShort\">\r\n  <span *ngFor=\"let datum of showDataShort\" (mousedown)=\"preventDefault($event)\" class=\"rangeItemShort\" [ngClass]=\"class\">\r\n    <div *ngIf=\"isObject(datum)\">\r\n      <span *ngFor=\"let subDatum of datum | slice: sliceNumber\" (mousedown)=\"preventDefault($event)\">\r\n        {{subDatum}}\r\n      </span>\r\n    </div>\r\n    <div *ngIf=\"!isObject(datum)\">\r\n      {{datum}}\r\n    </div>\r\n  </span>\r\n  <div *ngIf=\"showDataHidden \" class=\"hiddenData\" [ngClass]=\"{hidden: class.indexOf('editing') !== -1}\">\r\n    Hidden elements:\r\n    {{showDataHidden.join('')}}\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<span contenteditable=\"false\" (click)=\"stopPropagation($event)\"\r\n      class=\"selectedElement\" [ngClass]=\"elementName\" #element>{{elementName}}</span>\r\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<div #caret>|</div>\r\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<button class=\"toggle\" (click)=\"toggleEditWindow()\">Edit window</button>\r\n\r\n<div *ngIf=\"editWindowShow\" class=\"wrapper\" click=\"toggleEditWindow()\">\r\n  <textarea #text></textarea>\r\n  <button (click)=\"submitData(text.value)\" class=\"submit\">Submit!</button>\r\n  <button (click)=\"copyDataToTextArea()\" class=\"copy\">Copy from the template!</button>\r\n</div>\r\n\r\n<div class=\"modalDialog\" #errMsg>\r\n  <div>\r\n    <button class=\"close\" (click)=\"closeErrMsg()\">X</button>\r\n    <p #errTxt>Error!</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<div contenteditable=\"false\"\r\n     (mousedown)=\"stopPropagation($event)\"\r\n     (click)=\"stopPropagation($event)\"\r\n     (mouseup)=\"stopPropagation($event)\">\r\n  <div *ngFor=\"let datum of anchorsObj.data\" contenteditable=\"false\" (click)=\"handleAnchor(datum)\">\r\n    <span class=\"symbol\">{{datum.symbol}}</span>\r\n    <span class=\"text\">{{datum.name}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<div #twoButtons *ngIf=\"!showOneItem\"  (mousedown)=\"stopPropagation($event)\" [ngClass]=\"{'disabled': globalWrapDisable}\">\r\n        <span *ngFor=\"let datum of groupObj.data\" contenteditable=\"false\"\r\n              [ngClass]=\"datum.defBg\" (click)=\"handleGroup(datum.name)\">{{datum.name}}</span>\r\n</div>\r\n\r\n<div *ngIf=\"showOneItem\" (mousedown)=\"stopPropagation($event)\">\r\n        <span contenteditable=\"false\" class=\"showOneItem\" [ngClass]=\"{'disabled': disabled}\"\r\n              (mouseup)=\"stopPropagation($event)\" (mousedown)=\"changeItemToOpposite($event)\">{{oneItem}}</span>\r\n</div>\r\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div contenteditable=\"false\">\r\n            <span *ngFor=\"let datum of lookaroundObj.data | slice:0:2\" contenteditable=\"false\"\r\n                  [ngClass]=\"[(datum.name === lookaround.lALB.name) ? 'purple' :\r\n                  'brightPurple']\" (click)=\"handleLookaround(datum)\">{{datum.name}}</span>\r\n  </div>\r\n  <div contenteditable=\"false\">\r\n            <span *ngFor=\"let datum of lookaroundObj.data | slice:2:4\" contenteditable=\"false\"\r\n                  [ngClass]=\"[(datum.name === lookaround.posNeg.name) ? 'purple' :\r\n                  'brightPurple']\" (click)=\"handleLookaround(datum)\">{{datum.name}}</span>\r\n  </div>\r\n  <div>\r\n    <span (click)=\"addLookaround()\" class=\"addLookaround\" *ngIf=\"!dataToEdit\">Add</span>\r\n    <span (click)=\"editLookaround()\" class=\"changeLookaround\" *ngIf=\"dataToEdit\">Edit</span><!--\r\n    --><span (click)=\"deleteLookaround()\" class=\"deleteLookaround\" *ngIf=\"dataToEdit\">Delete</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let datum of data; let i = index\" (mouseover)=\"onMouseOver(datum.hint, i, $event)\"\r\n      (mouseout)=\"onMouseOut($event)\" (click)=\"addData(datum.nameForRegExp, i, $event)\"\r\n      [ngClass]=\"{\r\n              hoveredElement: getHoveredPresets().indexOf(datum.nameForRegExp) > -1\r\n              || ( i > getIndexOfFirstEl() && i <= getIndexOfLastEl())\r\n              || ( i >= getIndexOfLastEl() && i < getIndexOfFirstEl()),\r\n              selectedElement: getPresetFullElArray().indexOf(datum.nameForRegExp) > -1}\">\r\n  {{datum.name}}\r\n</span>\r\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let datum of data\"\n      [ngClass]=\"{purple:  datum.name === posNeg, brightPurple: datum.name !== posNeg}\"\n      (click)=\"handlePosNeg(datum.name)\">{{datum.name}}</span>\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let datum of data\" (mouseover)=\"onMouseOverPreset(datum)\"\r\n      (mouseout)=\"onMouseOutPreset()\" (click)=\"handlePresetClick(datum)\"\r\n      [ngClass]=\"{selectedElement: getPresets().indexOf(datum.nameForRegExp) > -1}\">{{datum.name}}</span>\r\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<div (mouseup)=\"stopPropagation($event)\">\r\n    <div class=\"top\">\r\n        <div class=\"search\" *ngIf=\"rangeData.topLeft\" >\r\n            <presets [dataToEdit]=\"compiledData\" ></presets>\r\n        </div>\r\n        <div class=\"posNeg\">\r\n            <pos-neg [data]=\"rangeData.topRight\" [status]=\"posNegStatus\" ></pos-neg>\r\n        </div>\r\n    </div>\r\n    <div class=\"ASCII\">\r\n        <ascii [dataToEdit]=\"compiledData\"></ascii>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedElement\" (click)=\"stopPropagation($event)\">\r\n  <div class=\"hint\" contenteditable=\"false\" *ngIf=\"!rangeElementHint\">\r\n    <span contenteditable=\"false\">\r\n        {{selectedElement.hint}}\r\n    </span>\r\n  </div>\r\n  <div class=\"hint\" contenteditable=\"false\" *ngIf=\"rangeElementHint\">\r\n    <span contenteditable=\"false\">\r\n        {{rangeElementHint}}\r\n    </span>\r\n  </div>\r\n  <div contenteditable=\"false\" class=\"data\" [ngClass]=\"selectedElement.name\" #data>\r\n\r\n    <range-data *ngIf=\"selectedElement.name === 'Range'\" [viewData]=\"viewData\"></range-data>\r\n    <group [viewData]=\"viewData\" *ngIf=\"selectedElement.name === 'Group'\"></group>\r\n    <lookaround *ngIf=\"selectedElement.name === 'Lookaround'\" (close)=\"close.emit()\"></lookaround>\r\n    <anchors *ngIf=\"selectedElement.name === 'Anchors'\"></anchors>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"elementToEdit && elementToEditName\" class=\"edit\" (click)=\"stopPropagation($event)\" (mouseup)=\"stopPropagation($event)\">\r\n\r\n  <div class=\"hint\" contenteditable=\"false\" *ngIf=\"rangeElementHint\">\r\n    <span contenteditable=\"false\">\r\n        {{rangeElementHint}}\r\n    </span>\r\n  </div>\r\n\r\n  <div contenteditable=\"false\" class=\"data\" [ngClass]=\"elementToEditName\" #data>\r\n\r\n    <range-data [dataToEdit]=\"elementToEdit\"  *ngIf=\"elementToEditName === 'Range'\"></range-data>\r\n    <group [viewData]=\"viewData\" [dataToEdit]=\"elementToEdit\" *ngIf=\"elementToEditName === 'Group'\"></group>\r\n    <lookaround [viewData]=\"viewData\" (close)=\"close.emit()\" [dataToEdit]=\"elementToEdit\" *ngIf=\"elementToEditName === 'Lookaround'\"></lookaround>\r\n    <anchors [dataToEdit]=\"elementToEdit\" *ngIf=\"elementToEditName === 'Anchors'\"></anchors>\r\n    <quantifier [dataToEdit]=\"elementToEdit\" *ngIf=\"elementToEditName === 'Quantifier'\"></quantifier>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<div class=\"regExp\">\r\n  <span><b>RegExp:</b></span><span *ngFor=\"let data of dataArray\">{{data}}</span>\r\n</div>\r\n<read-reg-exp class=\"regExpInput\"></read-reg-exp>\r\n\r\n\r\n<div #area class=\"area\" (click)=\"noSelectedMainEl($event)\" contenteditable=\"fasle\" tabindex=\"1\">\r\n  <!--<span contenteditable=\"false\"></span>-->   <!--just stub for caret-->\r\n\r\n  <div *ngIf=\"dataArray.length > 0 || selectedMainElement\">\r\n    <beauty-data [viewData]=\"viewData\"\r\n                 (passViewDataHigher)=\"handleInnerViewData($event)\"\r\n                 [hideAllQuantifiers]=\"hideAllQuantifiers\"\r\n                 (toggleGlobalQuantClicked)=\"handleQuantClicked($event)\"\r\n                 (passSelectedElementPosition) = \"setSelectedElementPosition($event)\"></beauty-data>\r\n  </div>\r\n\r\n  <selected-element *ngIf=\"selectedMainElement\"\r\n                    (close)=\"closeSelectedElement()\"\r\n                    [position] = \"selectedElementPosition\"\r\n                    [selectedElement]=\"selectedMainElement\"\r\n                    [viewData]=\"viewData\"></selected-element>\r\n\r\n  <selected-element *ngIf=\"elementToEdit\"\r\n                    (close)=\"closeSelectedElement()\"\r\n                    [position] = \"selectedElementPosition\"\r\n                    [elementToEdit]=\"elementToEdit\"\r\n                    [viewData]=\"viewData\"></selected-element>\r\n\r\n  <div class=\"data Group\" *ngIf=\"selectGroup\">\r\n    <group [disabled]=\"selectGroupDisable\"\r\n           [showOneItem]=\"true\"\r\n           (groupSelectedEl)=\"handleGroupSelection($event)\"\r\n           [viewData]=\"viewData\"></group>\r\n\r\n  </div>\r\n\r\n  <caret></caret>\r\n</div>\r\n"

/***/ }),
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ })
],[231]);
//# sourceMappingURL=main.bundle.js.map