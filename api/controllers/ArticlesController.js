/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list:function(req, res){
		Articles.find({}).exec(function(err, articles){
			if(err){
				res.send(500, {error: 'Database Error'})
			}
			res.view('list', {articles:articles});
		});
	},
	add:function(req, res){
		res.view('add')
	},
	create:function(req, res){
		var param = req.params.all();
		var xx = param.title;
		var vv = param.body;

		Articles.create({title: xx, body: vv}).exec(function(err){
			if(err){
				res.send(500, {error: 'Database Error'});
			}

			res.redirect('/articles/list');
		});
	},
	delete:function(req, res){
		Articles.destroy({id:req.params.id}).exec(function(err){
			if(err){
				res.send(500, {error: 'Database Error'});
			}

			res.redirect('/articles/list');

		});

		return false;
	}
};
