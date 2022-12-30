export const TextToCode = (data) => {
    let result = data;
    result = result
        .replaceAll(/(<script>)/g, `<red>Don't &nbsp use  &nbsp script &nbsp commands</red>`)
        .replaceAll(/(<[/]script>)/g, `<red>Don't &nbsp use &nbsp script &nbsp commands</red>`)
        .replaceAll(/((int)\s)/g, `<orange>int&nbsp</orange>`)
        .replaceAll(/((let)\s)/g, `<orange>let&nbsp</orange>`)
        .replaceAll(/((const)\s)/g, `<orange>const&nbsp</orange>`)
        .replaceAll(/((boolean)\s)/g, `<orange>Boolean&nbsp</orange>`)
        .replaceAll(/((char)\s)/g, `<orange>char&nbsp</orange>`)
        .replaceAll(/((short)\s)/g, `<orange>short&nbsp</orange>`)
        .replaceAll(/((float)\s)/g, `<orange>float&nbsp</orange>`)
        .replaceAll(/((double)\s)/g, `<orange>double&nbsp</orange>`)
        .replaceAll(/((return)\s)/g, `<orange>return&nbsp</orange>`)
        .replaceAll(/((exports)\s)/g, `<orange>exports&nbsp</orange>`)
        .replaceAll(/((require)\s)/g, `<orange>require&nbsp</orange>`)

        .replaceAll(/((class)\s)/g, `<blue>class&nbsp</blue>`)
        .replaceAll(/((Class)\s)/g, `<blue>Class&nbsp</blue>`)
        .replaceAll(/((function)\s)/g, `<blue>function&nbsp</blue>`)
        .replaceAll(/((typeof)\s)/g, `<blue> typeof &nbsp</blue>`)
        .replaceAll(/((for)\s)/g, `<blue>for&nbsp</blue>`)
        .replaceAll(/((while)\s)/g, `<blue>while&nbsp</blue>`)
        .replaceAll(/((if)\s)/g, `<blue>if&nbsp</blue>`)

        .replaceAll(/((this)\s)/g, `<green>this&nbsp</green>`)
        .replaceAll(/((object)\s)/g, `<green> object&nbsp</green>`)
        .replaceAll(/((module)\s)/g, `<green> module&nbsp</green>`)
        .replaceAll(/(('undefined')\s)/g, `<green>'undefined'&nbsp</green>`)
        .replaceAll(/(('function')\s)/g, `<green> 'function'&nbsp</green>`)

        .replaceAll(/((import)\s)/g, `<purple>import&nbsp</purple>`)
        .replaceAll(/(\n|\r\n)/g, '<br>');

    return result;
};

export const CodeToHtml = (data) => {
    let result = data;
    result = result
        .replaceAll(/(<orange>)/g, '<span class=OrangeText>')
        .replaceAll(/(<[/]orange>)/g, '</span>')
        .replaceAll(/(<blue>)/g, '<span class=BlueText>')
        .replaceAll(/(<[/]blue>)/g, '</span>')
        .replaceAll(/(<red>)/g, '<span class=RedText>')
        .replaceAll(/(<[/]red>)/g, '</span>')
        .replaceAll(/(<purple>)/g, '<span class=PurpleText>')
        .replaceAll(/(<[/]purple>)/g, '</span>')
        .replaceAll(/(<green>)/g, '<span class=GreenText>')
        .replaceAll(/(<[/]green>)/g, '</span>');

    return result;
};
