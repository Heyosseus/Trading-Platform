function downloadFile(filename, content, content__TH, content__name) {
            const element = document.createElement('a');


            // a blob is a data type that can store binary data
            const blob = new Blob([content, content__TH, content__name], {
                type: 'plain/text',
                type: 'plain/text__1',
                type: 'plain/text__2'
            });

            const fileUrl = URL.createObjectURL(blob);


            element.setAttribute('href', fileUrl); // file location
            element.setAttribute('download', filename); // file name

            element.style.display = 'none';

            document.body.appendChild(element);
            element.click();

            document.body.removeChild(element);
        };

        window.onload = () => {
            document.getElementById('download').addEventListener('click', e => {
                const filename = document.getElementById('filename').value;

                const content = document.getElementById('text').value;

                const content__TH = document.getElementById('text__1').value;

                const content__name = document.getElementById('text__2').value;

                if (filename && content && content__TH && content__name) {
                    downloadFile(filename, content, content__TH, content__name);
                }

            });
        };

