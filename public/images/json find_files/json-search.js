var JsonSearch = function(data, form) {
    (function() {
        var search = {
            settings: {
                startPage: 0,
                itemsPerPage: 10,
                totalItems: data.length
            },
            init: function(data, form) {
                var nodeArray = Array.prototype.slice.call(form.childNodes);
                var submitButton = nodeArray.filter(findSubmitButton),
                selectOption = nodeArray.filter(findSearchSelect),
                lableList = nodeArray.filter(findLabels);
                lableList.forEach(hideSearchFields),
                search.settings.totalPages = (search.settings.totalItems/search.settings.itemsPerPage);

                function hideSearchFields(elem, i) {
                    if (i > 0) {
                        elem.className = 'hide';
                    }
                }

                function findLabels(obj, i) {
                    return obj.nodeName.toLowerCase() === 'label';
                }

                function findSearchSelect(obj) {
                    return obj.nodeName.toLowerCase() === 'select';
                }

                function findSubmitButton(obj) {
                    return obj.type === 'submit';
                }

                search.selectOptionsInit(selectOption, lableList);
                search.submitButtonInit(submitButton);
                search.pagination(data);
            },
            selectOptionsInit: function(o, ll) {
                function getLableFor(obj) {
                    return obj.htmlFor;
                }

                o[0].addEventListener('change', function(e) {
                    var selectOpt = this.value;

                    var hidden = Array.prototype.slice.call(document.getElementsByClassName('hide'));
                    hidden.forEach(function(elem) {
                        elem.className = '';
                    });

                    ll.map(getLableFor).forEach(function(elem) {
                        var reg = new RegExp(selectOpt, 'i');

                        if (!reg.test(elem)) {
                            var hide = document.getElementById(elem);
                            hide.parentElement.className = 'hide';
                        }
                    });
                });
            },
            submitButtonInit: function(sb) {
                sb[0].addEventListener('click', function(e) {
                    e.preventDefault();
                    search.formValidate(form);
                });
            },
            formValidate: function(form) {
                var activeElem = document.querySelector('label:not(.hide) input');
                var elem = activeElem.value;
                var regPattern = activeElem.getAttribute('pattern');
                var regex = new RegExp(regPattern, 'i');

                if (regex.test(elem)) {
                    activeElem.className = '';
                    search.formSearch(elem);
                } else {
                    activeElem.className = 'error';
                }
            },
            formSearch: function(name) {
                console.log(name);
            },
            buildDataModel: function() {
                dataDisplay = data.slice(search.settings.page, search.settings.itemsPerPage);
                var dataList = dataDisplay.map(search.dataModel);
                var nodeList = dataList.map(search.addDataToDom);

            },
            dataModel: function(obj) {
                 var div = document.createElement('div');
                 div.className = 'item';
                 div.innerHTML = '<span class="result-id">'+obj.id+'.</span>';
                 div.innerHTML += '<h1>'+obj.first_name+' '+obj.last_name+'</h1>';
                 div.innerHTML += '<h2>'+obj.email+'</h2>';
                 div.innerHTML += '<h3>'+obj.ip_address+'</h3>';
                 return div;
            },
            addDataToDom: function(obj) {
                var parent = document.getElementById('json-data');
                parent.appendChild(obj);
            },
            pagination: function(data) {
                var pageList = search.buildPagination(search.settings.totalPages);

                pageList.slice(0,search.settings.itemsPerPage-1).map(search.addPaginationToDom);
            },
            buildPagination: function(totalPages) {
                var buildPages = [];

                var i = 1;
                while (i <= totalPages) {
                    var link = document.createElement('a');
                    link.className = 'pageLink';
                    link.href = i;
                    link.dataset.pageId = i;
                    link.innerHTML = i;
                    buildPages.push(link);
                    i++;
                }
                search.paginationPreventDefault(buildPages);
                search.paginationList = buildPages;
                return buildPages;
            },
            updatePagination: function(id) {
                var active = document.querySelector('#active');
                active.id = '';

                var pagePag = document.getElementById('pagination');
                //pagePag.removeChild(active);
                pagePag.innerHTML = '';
                var start = (id > 5) ? Number(id) - 5 : 0;
                var end = Number(start) + Number(search.settings.itemsPerPage) - 1;

                search.paginationList.slice(start,end).map(search.addPaginationToDom);

                var selected = document.querySelector('.pageLink[data-page-id="'+id+'"]');
                //console.log(selected);
                selected.id = 'active-page';
                //id = null;
            },
            addPaginationToDom: function(items) {
                var parent = document.getElementById('pagination');
                parent.appendChild(items);
            },
            paginationPreventDefault: function(elems) {
                elems.map(function(obj) {
                    obj.addEventListener('click', function(e) {
                        e.preventDefault();
                        search.updatePagination(this.dataset.pageId);
                    });
                });
            }
        };

        search.init(data, form);

    })(data, form);
};
