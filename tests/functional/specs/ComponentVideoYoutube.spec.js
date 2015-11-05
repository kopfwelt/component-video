import assert from 'assert'

describe('Fullscreen video', function() {

    it('should cover the whole page', function(done) {
        browser
            .url('/')
            .getTitle(function(err, title) {
                assert.equal(err, undefined);
                assert.equal(title, 'Video component');
            })
            .call(done);
    });

    it('should autoplay', function(done) {
        browser
            .url('/')
    })
})