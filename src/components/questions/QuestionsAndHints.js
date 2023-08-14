const questionsAndHints = [{
    Selections:"1:フランス 2:ドイツ 3:イギリス 4:イタリア",
    Hints:["Oui", "ベシャメルソース", "ブイヤベース", "マドレーヌ", "ビュッシュ・ド・エル", "ボンジュール(※ヒント終了)"],
    Answer:1
}, 
{   Selections:"1:イギリス 2:イタリア 3:ポーランド 4:スペイン",
    Hints:["Grazie", "サンマルツァーノ", "オリーブオイル", "フォカッチャ", "ミネストローネ", "コロッセオ(※ヒント終了)"],
    Answer:2}
];
export function QuestionsAndHints(number){
    return questionsAndHints[number];
}
//問題の数を返す関数
export function NumberOfQuestion(){
    return questionsAndHints.length;
}