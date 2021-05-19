import { API, FileInfo } from 'jscodeshift';
import { ImportDeclaration } from "jscodeshift/src/core";

// grep -r -l "@abdt/ornament" ../../face2/face2action.bank.terminal.web/src | xargs npx jscodeshift -t main.ts --parser=babylon

module.exports = (fileInfo: FileInfo, api: API) => {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);
    const ornamentData = [];

    root
        .find(j.ImportDeclaration, (value: ImportDeclaration) => value.source.value === '@abdt/ornament')
        .forEach(item => {
            const components = [];
            const specifiers = item.value.specifiers;

            specifiers?.forEach(i => components.push(i.local?.name))

            console.log(components)
        })

    return root.toSource()
}
