const { sortPages }=require('./report.js')
const {test,expect}=require('@jest/globals')

test('sortPages 2 Pages',()=>{
    const input={
        'https://blog.boot.dev/path':1,
        'https://blog.boot.dev/':3
    }
    const actual=sortPages(input)
    const expected = [
        ['https://blog.boot.dev/',3],
        ['https://blog.boot.dev/path',1]
    ]
    expect(actual).toEqual(expected)

})


test('sortPages 5 Pages',()=>{
    const input={
        'https://blog.boot.dev/path':1,
        'https://blog.boot.dev/':3,
        'https://google.com/':5,
        'https://www.blog.com/':0
    }
    const actual=sortPages(input)
    const expected = [
        ['https://google.com/',5],
        ['https://blog.boot.dev/',3],
        ['https://blog.boot.dev/path',1],
        ['https://www.blog.com/',0]
    ]
    expect(actual).toEqual(expected)

})