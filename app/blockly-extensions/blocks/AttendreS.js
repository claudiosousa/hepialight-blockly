
const AttendreS = {
    init: function () {
        this.appendDummyInput()
            .appendField('attendre')
            .appendField(new Blockly.FieldNumber(1, 0, Infinity), 's')
            .appendField('s');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip('Attendre des secondes');
        this.setHelpUrl('');
    },
    python: block => {
        const s = block.getFieldValue('s');
        return `delai(${s})\n`;
    }
};


Blockly.Blocks.AttendreS = AttendreS;
Blockly.Python.AttendreS = AttendreS.python;