let serviceEndpoint = '/_vti_bin/listdata.svc/';

function createDocument(data, list) {
	return new Promise(function(resolve, reject) {

		$.ajax({
			url: serviceEndpoint + list,
			type: 'POST',
			contentType: 'application/json;odata=verbose',
			data: JSON.stringify(data),
			headers: {
				'Accept': 'application/json;odata=verbose',
				'X-RequestDigest': $('#__REQUESTDIGEST').val()
			},
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				reject(exception);
			}
		});
	});
}

function updateDocument(data, list) {
	return new Promise(function(resolve, reject) {

		$.ajax({
			url: serviceEndpoint + list,
			type: 'POST',

			contentType: 'application/json;odata=verbose',
			processData: false,
			data: JSON.stringify(data),
			headers: {
				'Accept': 'application/json;odata=verbose',
				'X-RequestDigest': $('#__REQUESTDIGEST').val(),
				'X-HTTP-Method': 'MERGE',
				'If-Match': '*'
			},
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				reject(exception);
			}
		});
	});
}

function deleteDocument(id, list) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: serviceEndpoint + list + '(' + id + ')',
			type: 'DELETE',
			headers: {
				Accept: 'application/json;odata=verbose',
				'X-RequestDigest': $('#__REQUESTDIGEST').val(),

				'IF-MATCH': '*'
			},
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				reject(exception);
			}
		});
	});
}

function getFilteredList(list, term) {
	return new Promise(function(resolve, reject) {
		
		filter = 'substringof(%27' + term + '%27,Tags)+or+substringof(%27' + term + '%27,Title)';
		expand = '&amp;$expand=CreatedBy';
		urlstring = '?$filter=' + filter + expand;
		
		$.ajax({
			url: serviceEndpoint + list + urlstring,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				reject(exception);
			}

		});
	});
}



//------------------------------------------------------------------------------------

function getMyUsername() {
	return new Promise(function(resolve, reject) {
		$('#sharepoint-tunnel').load(function() {
			username = $('#sharepoint-tunnel').contents().find('.o365cs-me-bidi ').text();
			resolve(username);
		});
	});
}

function getMyUserIdByName(name) {
	return new Promise(function(resolve, reject) {
		filter = ' Name+eq+%27' + name + '%27';
		urlstring = '/_vti_bin/listdata.svc/UserInformationList ? $filter = ' + filter;
		
		$.ajax({
			url: urlstring,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				reject(exception);
			}
		});
	});
}

//example ulrstring filter
function getEdges() {
	return new Promise(function(resolve, reject) {
		
		queryString = window.location.search;
		urlParams = new URLSearchParams(queryString);
		hasUrlParamId = urlParams.has('id');
		
		if (hasUrlParamId) {
			getVertexById(urlParams.get('id')).then(function(data) {
				if (data.d.results.length == 1) {
					selectedNode = data.d.results[0];
					reject('retry');
				} else {
					// id does not exist - revert to root folder
					filter = 'Head+lt+1+or+Tail+lt+1';
				}
			});
		} else {
			filter = 'Head+eq+' + selectedNode.Id + '+or+Tail+eq+' + selectedNode.Id;
		}
		urlstring = edgesURL + '?$filter=' + filter;
		$.ajax({
			url: urlstring,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				console.log(status);
				console.log(exception);

				reject(exception);
			}
		});
	});
}

function getParentIdById(id) {
	return new Promise(function(resolve, reject) {
		filter = 'Tail+eq+' + id + '+and+Title+eq+%27has_parent%27';
		urlstring = edgesURL + '?$filter=' + filter;
		$.ajax({
			url: urlstring,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				console.log(status);
				console.log(exception);
				reject(exception);
			}
		});
	});
}

function getVertexById(id) {
	return new Promise(function(resolve, reject) {
		filter = 'Id+eq+' + id;
		expand = '&amp;$expand=CreatedBy';
		urlstring = verticesURL + '?$filter=' + filter + expand;
		$.ajax({
			url: urlstring,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				console.log(status);
				console.log(exception);
				reject(exception);
			}
		});
	});
}

function getHeadVertex(edge) {
	return new Promise(function(resolve, reject) {
		filter = 'Id+eq+' + edge.Head;
		expand = '&amp;$expand=CreatedBy';
		urlstring = verticesURL + '?$filter=' + filter + expand;
		$.ajax({
			url: urlstring,
			type: 'GET',
			dataType: 'json',

			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				console.log(status);
				console.log(exception);
				reject(exception);
			}
		});
	});
}

function getTailVertex(edge) {
	return new Promise(function(resolve, reject) {
		filter = 'Id+eq+' + edge.Tail;
		expand = '&amp;$expand=CreatedBy';
		urlstring = verticesURL + '?$filter=' + filter + expand;
		$.ajax({
			url: urlstring,
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				console.log(status);
				console.log(exception);
				reject(exception);
			}
		});
	});
}

function createNewVertex(obj) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: verticesURL,
			type: 'POST',
			contentType: 'application/json;odata=verbose',
			data: JSON.stringify(obj),
			headers: {
				'Accept': 'application/json;odata=verbose',
				'X-RequestDigest': $('#__REQUESTDIGEST').val()
			},
			success: function(data) {
				resolve(data);
			},
			error: function(jqxhr, status, exception) {
				console.log('ERROR: ' + status + ' - ' + exception);
				reject();
			}
		});
	});
}

