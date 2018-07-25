// ===============================================================================
// DATA
// Below data will hold all of the users data.
// ===============================================================================

var userData = [
    {
        name: " ",
        photo: " ",
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    },

    {
        name: "Roger",
        photo: "https://media.gettyimages.com/photos/singer-roger-daltrey-performs-the-whos-tommy-at-san-jose-civic-on-picture-id129934553 ",
        scores: [
            $("#q1").val(5),
            $("#q2").val(3),
            $("#q3").val(1),
            $("#q4").val(5),
            $("#q5").val(2),
            $("#q6").val(2),
            $("#q7").val(3),
            $("#q8").val(5),
            $("#q9").val(5),
            $("#q10").val(5)
        ]
    },

    {
        name: "Liz",
        photo: "https://vignette.wikia.nocookie.net/indianajones/images/6/67/Vicky_prentiss.jpg/revision/latest?cb=20171121005932",
        scores: [
            $("#q1").val(5),
            $("#q2").val(3),
            $("#q3").val(4),
            $("#q4").val(4),
            $("#q5").val(1),
            $("#q6").val(2),
            $("#q7").val(4),
            $("#q8").val(5),
            $("#q9").val(4),
            $("#q10").val(5)
        ]
    },

    {
        name: "Paul",
        photo: "https://cdn.britannica.com/700x450/53/194353-004-DAD1EA1B.jpg",
        scores: [
            $("#q1").val(4),
            $("#q2").val(5),
            $("#q3").val(5),
            $("#q4").val(4),
            $("#q5").val(2),
            $("#q6").val(2),
            $("#q7").val(4),
            $("#q8").val(5),
            $("#q9").val(1),
            $("#q10").val(5)
        ]
    },

    {
        name: "Grace",
        photo: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fportrait_435x518%2Fpublic%2Fgrace-kelly.jpg%3Fitok%3D_RP91SKy&w=300&q=85",
        scores: [
            $("#q1").val(5),
            $("#q2").val(4),
            $("#q3").val(1),
            $("#q4").val(3),
            $("#q5").val(2),
            $("#q6").val(4),
            $("#q7").val(1),
            $("#q8").val(5),
            $("#q9").val(5),
            $("#q10").val(3)
        ]
    },

    {
        name: "Donna",
        photo: "https://cdn-img.essence.com/sites/default/files/styles/1x1_lg/public/images/2012/05/23/donna-summer-8.jpg?itok=KaHClpLy",
        scores: [
            $("#q1").val(5),
            $("#q2").val(4),
            $("#q3").val(2),
            $("#q4").val(5),
            $("#q5").val(2),
            $("#q6").val(5),
            $("#q7").val(2),
            $("#q8").val(3),
            $("#q9").val(1),
            $("#q10").val(4)
        ]
    },

    {
        name: "Max",
        photo: "https://pbs.twimg.com/media/BxvRE1RCYAAw_8s.jpg",
        scores: [
            $("#q1").val(5),
            $("#q2").val(5),
            $("#q3").val(1),
            $("#q4").val(2),
            $("#q5").val(4),
            $("#q6").val(5),
            $("#q7").val(5),
            $("#q8").val(2),
            $("#q9").val(1),
            $("#q10").val(5)
        ]
    }
];



// Export the array. This makes it accessible to other files using require.
module.exports = userArray;
