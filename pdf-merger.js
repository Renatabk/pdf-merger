document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pdfForm');
    const status = document.getElementById('status');
    const progressBar = document.querySelector('.progress-bar');
    const progressContainer = document.querySelector('.progress');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const pdfFiles = document.getElementById('pdfFiles').files;

        if (pdfFiles.length === 0) {
            status.textContent = 'Please select at least one PDF file.';
            return;
        }

        if (pdfFiles.length > 20) {
            status.textContent = 'Please select no more than 20 PDF files.';
            return;
        }

        progressContainer.style.display = 'block';
        status.textContent = 'Merging PDFs...';

        try {
            const pdfDoc = await PDFLib.PDFDocument.create();
            
            for (let i = 0; i < pdfFiles.length; i++) {
                const file = pdfFiles[i];
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
                const copiedPages = await pdfDoc.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => pdfDoc.addPage(page));
                
                // Update progress
                const progress = Math.round(((i + 1) / pdfFiles.length) * 100);
                progressBar.style.width = `${progress}%`;
                progressBar.textContent = `${progress}%`;
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            
            download(blob, 'merged.pdf', 'application/pdf');
            
            status.textContent = 'PDFs merged successfully! Downloading...';
            progressBar.style.width = '100%';
            progressBar.textContent = '100%';
        } catch (error) {
            console.error('Error:', error);
            status.textContent = 'An error occurred while merging PDFs.';
        }
    });
});
