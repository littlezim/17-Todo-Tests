describe('todoFactory', function(){

	beforeEach(function(){
		bard.appModule('app');
		bard.inject('todoFactory', 'apiUrl', '$httpBackend');
	});
	//Get All Test
	describe('when getAll is called', function(){
		//Test For Success
		it('should return data on success', function(){

			var response = {
				data: [{}]
			};
			
			$httpBackend.whenGET(apiUrl + '/todos').respond(response);

			todoFactory.getAll().then(
				function(data) {
					expect(data.length).toEqual(1);
				},
				function(error) {
					expect(1).toEqual(2);
				}
			);
		});
		//Test For Failure
		it('should return error on http fail', function(){
			$httpBackend.whenGET(apiUrl + '/todos').respond(500);

			todoFactory.getAll().then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});

	//GetById Test
	describe('when getById is called', function(){
		//Test for Success
		it('should return Id data on success', function(){

			var id = 2;

			var response ={
				data: {}
			};

			$httpBackend.whenGET(apiUrl + '/todos/' + id).respond(response);

			todoFactory.getById(id).then(
				function(data) {
					expect(data).toBeDefined();
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);

		});
		//Test for Failure
		it('should return error on http fail', function(){

			var id = 2;

			$httpBackend.whenGET(apiUrl + '/todos/' + id).respond(500);

			todoFactory.getById(id).then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});
	//Add Test
	describe('when add is called', function(){
		//Test for Success
		it('should return data on success', function(){

			var todo = "stuff";

			var response ={
				data: [{}, {}]
			};

			$httpBackend.whenPOST(apiUrl + '/todos', todo).respond(response);

			todoFactory.add(todo).then(
				function(data) {
					expect(data.length).toEqual(3);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);

		});
		//Test For Failure
		it('should return error on http fail', function(){

			var todo = "stuff";

			$httpBackend.whenPOST(apiUrl + '/todos', todo).respond(500);

			todoFactory.add(todo).then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});

	//Update Test
	describe('when update is called', function(){
		//Test for success
		it('should return data on success', function(){

			var todo = "stuff";

			var response ={
				data: {}
			};

			$httpBackend.whenPUT(apiUrl + '/todos/' + todo.todoId, todo).respond(response);

			todoFactory.update(todo).then(
				function(data) {
					expect(data).toBeDefined();
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);

		});
		//Test for Failure
		it('should return error on http fail', function(){

			var todo = "stuff";

			$httpBackend.whenPUT(apiUrl + '/todos/' + todo.todoId, todo).respond(500);

			todoFactory.update(todo).then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});

	//Remove Test
	describe('when remove is called', function(){
		//Test for Success
		it('should return data on success', function(){

			var todo = "stuff";

			var response ={
				data: [{}, {}, {}]
			};

			$httpBackend.whenDELETE(apiUrl + '/todos/' + todo.todoId).respond(response);

			todoFactory.remove(todo).then(
				function(data) {
					expect(data.length).toEqual(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);

		});
		//Test for Failure
		it('should return error on http fail', function(){

			var todo = "stuff";

			$httpBackend.whenDELETE(apiUrl + '/todos/' + todo.todoId).respond(500);

			todoFactory.remove(todo).then(
				function(data) {
					expect(1).toBe(2);
				},
				function(error) {
					expect(error).toBeDefined();
				}
			);
		});
	});

});